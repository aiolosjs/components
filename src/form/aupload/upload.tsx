import React, { useState, useEffect, useRef, useMemo, ReactElement } from 'react';
import { Upload, Button, Modal, message } from 'antd';
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, RcFile } from 'antd/lib/upload/interface';
import Lightbox from 'lightbox-component2';

import omit from 'omit.js';

interface CarouserImagesProps {
  uid: string;
  src: string;
  title: string;
}

const extname = (url: string = '') => {
  const temp = url.split('/');
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

const isLtMaxFileSize: (fileSize: number, maxFileSize: number) => boolean = (
  fileSize,
  maxFileSize,
) => {
  const maxSize = maxFileSize * 1024 * 1024;

  return fileSize <= maxSize;
};

const isPdfFileType = (type: string): boolean => type.indexOf('/pdf') > 0;
const isImageFileType = (type: string): boolean => type.indexOf('image/') === 0;

const isLtMaxFileCount: (fileCount: number, maxFileCount: number) => boolean = (
  fileCount,
  maxFileCount,
) => fileCount <= maxFileCount;

const isImageUrl = (file: UploadFile): boolean => {
  if (file.type) {
    return isImageFileType(file.type);
  }
  const url: string = (file.thumbUrl || file.url) as string;
  const extension = extname(url);
  if (
    /^data:image\//.test(url) ||
    /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)
  ) {
    return true;
  }
  return false;
};

const isPdfUrl = (file: UploadFile): boolean => {
  if (file.type) {
    return isPdfFileType(file.type);
  }
  const url: string = file.url as string;
  const extension = extname(url);

  if (/(pdf|PDF)$/i.test(extension)) {
    return true;
  }
  return false;
};

// 这个方法的目的是解决如果文件类型不行是image/* ,无法点击showPreviewIcon
// https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/UploadList.tsx#L266
const setFileListPreviewIcon = (fileList: UploadFile[]): UploadFile[] =>
  fileList.map(file => {
    if (file.status === 'done' && file.thumbUrl === '') {
      file.thumbUrl = file.preview || '';
    }

    return file;
  });

const getBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

const getCarouserImages = (fileList: UploadFile[]): CarouserImagesProps[] =>
  fileList
    .filter(file => file.status === 'done')
    .filter(file => isImageUrl(file) || isPdfUrl(file))
    .map(file => ({
      uid: file.uid,
      src: file.preview || file.thumbUrl || file.url || '',
      title: file.name,
    }));

interface FileFlagProps {
  errorFlag?: boolean;
  preview?: string;
}

export interface UploadFormItemProps {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
  maxFileSize?: number;
  maxFileCount?: number;
  customUploadBtn?: React.ReactNode;
  single?: boolean;
  widgetProps?: Omit<UploadProps<any>, 'value'>;
}

const AUploadFormItem: React.FC<UploadFormItemProps> = ({
  value,
  onChange,
  maxFileSize = 10,
  maxFileCount = 10,
  customUploadBtn,
  single = false,
  widgetProps = {},
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [carouserImages, setCarouserImages] = useState<CarouserImagesProps[]>([]);

  const isInitValueComplete = useRef(false);
  const fileListRealLen = useRef(0);
  const lightBoxRef = useRef<any>();
  const inputRef = useRef<any>();

  const { listType = 'picture', showUploadList, ...widgetPropsRest } = widgetProps;
  const uploadRestProps = omit(widgetPropsRest, [
    'onChange',
    'onRemove',
    'fileList',
    'beforeUpload',
  ]);

  useEffect(() => {
    if (value && !isInitValueComplete.current) {
      fileListRealLen.current = value.length;
      isInitValueComplete.current = true;
      setFileList(value);
    }
  }, [value]);

  useEffect(() => {
    setCarouserImages(getCarouserImages(fileList));
  }, [fileList]);

  const onPreview = async (file: UploadFile) => {
    if (!isImageUrl(file) && !isPdfUrl(file)) {
      window.open(file.thumbUrl || file.url);
      return;
    }
    const currentIndex = carouserImages.findIndex(cfile => cfile.uid === file.uid);

    if (lightBoxRef.current) {
      lightBoxRef.current.toggleLightbox(currentIndex === -1 ? 0 : currentIndex);
    }
  };

  const onRemove = (file: UploadFile) =>
    new Promise<boolean>(resolve => {
      Modal.confirm({
        title: '删除',
        icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
        content: '确认要删除该文件吗？',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          if (widgetProps.onRemove) {
            widgetProps.onRemove(file);
          }

          fileListRealLen.current -= 1;
          message.success('删除成功');

          resolve(true);
        },
        onCancel() {
          resolve(false);
        },
      });
    });

  const beforeUpload = async (file: RcFile & FileFlagProps, newFileList: RcFile[]): Promise<void> =>
    new Promise(async (resolve, reject) => {
      fileListRealLen.current += 1;
      file.errorFlag = false;

      if (!isLtMaxFileSize(file.size, maxFileSize)) {
        fileListRealLen.current -= 1;
        file.errorFlag = true;
        message.warning(`文件${file.name}不能上传,大小不能超过${maxFileSize}M`);
        reject();
      }

      if (!isLtMaxFileCount(fileListRealLen.current, maxFileCount) && !single) {
        fileListRealLen.current -= 1;
        file.errorFlag = true;
        message.warning(`文件${file.name}不能上传,最多上传${maxFileCount}张`);
        reject();
      }

      if (!file.preview) {
        file.preview = await getBase64(file);
      }

      if (widgetProps.beforeUpload) {
        widgetProps.beforeUpload(file, newFileList);
      }

      resolve();
    });

  const triggerChange = (info: UploadChangeParam) => {
    const { fileList: newFileList } = info;
    if (onChange) {
      onChange(newFileList);
    }

    if (widgetProps.onChange) {
      widgetProps.onChange(info);
    }
  };

  const handleChange = (info: UploadChangeParam<UploadFile & FileFlagProps>) => {
    let { fileList: newFileList, file } = info;

    if (file.errorFlag) return;

    if (file.status === 'error') {
      message.error(`文件${file.name}上传失败!`);
    }

    if (single) {
      newFileList = newFileList.splice(-1);
    }

    triggerChange({ ...info, fileList: newFileList });
    setFileList(newFileList);
  };

  const renderUploadButton = () => {
    if (listType === 'text' || listType === 'picture') {
      if (customUploadBtn) {
        return customUploadBtn;
      }

      return (
        <div>
          <Button>
            <PlusOutlined /> 上传文件
          </Button>
        </div>
      );
    }

    if (listType === 'picture-card' || single) {
      if (customUploadBtn) {
        return customUploadBtn;
      }
      return (
        <div>
          <PlusOutlined />
          <div>上传</div>
        </div>
      );
    }

    return null;
  };

  const handleitemRender = (
    originNode: ReactElement,
    file: UploadFile,
    currFileList?: Array<UploadFile<any>>,
  ) => {
    if (!single) return originNode;
    return (
      <div
        style={{ width: 104, height: 104, cursor: 'pointer' }}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.upload.uploader.onClick();
          }
        }}
      >
        {originNode}
      </div>
    );
  };

  const renderImageFunc = (
    idx: string,
    image: any,
    toggleLightbox: any,
    width: number,
    height: number,
  ) => (
    <img
      alt=""
      key={idx}
      src={image.src}
      className="img-circle"
      style={{ width, height, display: 'none' }}
      onClick={toggleLightbox.bind(null, idx)}
    />
  );

  const memoFileList = useMemo(() => setFileListPreviewIcon(fileList), [fileList]);

  return (
    <>
      <Upload
        fileList={memoFileList}
        listType={listType}
        onRemove={onRemove}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        itemRender={handleitemRender}
        ref={inputRef}
        showUploadList={
          single
            ? { showPreviewIcon: false, showRemoveIcon: false, showDownloadIcon: false }
            : showUploadList
        }
        {...uploadRestProps}
      >
        {single && memoFileList.length > 0 ? null : renderUploadButton()}
      </Upload>
      {carouserImages.length > 0 ? (
        <Lightbox
          ref={lightBoxRef}
          modalStyle={{ zIndex: 9999 }}
          images={carouserImages}
          renderImageFunc={renderImageFunc}
          renderDescriptionFunc={() => null}
        />
      ) : null}
    </>
  );
};

export default AUploadFormItem;
