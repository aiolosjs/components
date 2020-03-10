import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Form, Upload, Button, Icon, Modal, message } from 'antd';
import Lightbox from 'lightbox-component2';
import { UploadProps, UploadChangeParam, UploadFile, RcFile } from 'antd/lib/upload/interface';
import { IBaseWidgetProps } from '../types';

export interface AUploadProps extends IBaseWidgetProps {
  maxFileSize?: number;
  maxFileCount?: number;
  customUploadBtn?: React.ReactNode;
  widgetProps?: UploadProps;
}

interface FileFlagProps {
  errorFlag?: boolean;
}

interface UploadFileProps extends UploadFile, FileFlagProps {}

interface BeforeUploadProps extends RcFile, FileFlagProps {}

interface CarouserImagesProps {
  uid: string | number;
  src: string;
  title: string;
}

function filterFileErrorFlag(files: UploadFileProps[]): UploadFileProps[] {
  return files
    .filter(f => !f.errorFlag)
    .map(f => {
      // 这个方法的目的是解决如果文件类型不行是image/* ,无法点击showPreviewIcon
      // https://github.com/ant-design/ant-design/blob/6e27c62eb36feee8c1c0c1b4c07cd92ba341f544/components/upload/UploadList.tsx#L208
      if (f.thumbUrl === '' && f.response) {
        f.url = f.response.body;
      }
      return f;
    });
}

function regpHandle(text: string): boolean {
  return /^https?.*(gif|png|jpe?g|GIF|PNG|JPE?G)$/.test(text);
}

function regpPdfHandle(text: string): boolean {
  return /^https?.*(pdf|PDF)$/.test(text);
}

const AUpload: React.SFC<AUploadProps> = ({
  name,
  label,
  form,
  widgetProps = {},
  formItemProps,
  rules,
  initialValue,
  fieldDecoratorOptions = {},
  maxFileSize = 10,
  maxFileCount = 10,
  customUploadBtn,
}) => {
  const { listType = 'picture', ...widgetPropsRest } = widgetProps;

  const lightBoxRef = useRef<any>();
  const fileListLen = useRef(0);
  const [normFileList, setNormFileList] = useState<UploadFileProps[]>([]);

  useEffect(() => {
    if (Array.isArray(initialValue)) {
      fileListLen.current = initialValue.length;
      setNormFileList(initialValue);
    }
  }, []);

  function beforeUpload(file: BeforeUploadProps, fileList: BeforeUploadProps[]) {
    const beforeUploadFileListLen = fileList.length;
    const maxSize = maxFileSize * 1024 * 1024;
    if (file.size > maxSize) {
      message.warning(`文件大小不能超过${maxFileSize}M`);
      file.errorFlag = true;
      return false;
    }

    const count = fileListLen.current + beforeUploadFileListLen - maxFileCount;
    const fileIndex = fileList.findIndex(f => f.uid === file.uid);
    if (count > 0) {
      const maxCanUploadFileNum = beforeUploadFileListLen - count;
      for (let i = 0; i < beforeUploadFileListLen; i += 1) {
        if (fileIndex >= maxCanUploadFileNum) {
          message.warning(`${file.name}不能上传，最多上传${maxFileCount}张`);
          file.errorFlag = true;
          return false;
        }
        return true;
      }
    }

    return true;
  }

  function onRemove() {
    return new Promise<boolean>(resolve => {
      Modal.confirm({
        title: '删除',
        content: '确认要删除该文件吗？',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          message.success('删除成功');
          resolve(true);
        },
        onCancel() {
          resolve(false);
        },
      });
    });
  }

  function renderUploadButton(): React.ReactNode {
    if (listType === 'text' || listType === 'picture') {
      if (customUploadBtn) {
        return customUploadBtn;
      }

      return (
        <div>
          <Button>
            <Icon type="upload" /> 上传文件
          </Button>
        </div>
      );
    }

    if (listType === 'picture-card') {
      if (customUploadBtn) {
        return customUploadBtn;
      }
      return (
        <div>
          <Icon type="plus" />
          <div>上传</div>
        </div>
      );
    }

    return null;
  }

  function getCarouserImages(fileList: UploadFileProps[]): CarouserImagesProps[] {
    return fileList
      .filter(file => file.status === 'done')
      .map(file => ({
        uid: file.uid,
        src: file.response ? file.response.body : file.url,
        title: file.name,
      }));
  }

  function renderImageFunc(
    idx: string,
    image: any,
    toggleLightbox: any,
    width: number,
    height: number,
  ): any {
    return (
      <img
        alt=""
        key={idx}
        src={image.src}
        className="img-circle"
        style={{ width, height, display: 'none' }}
        onClick={toggleLightbox.bind(null, idx)}
      />
    );
  }

  function onPreview(file: UploadFileProps) {
    if (listType === 'text') return null;

    const url = file.response ? file.response.body : file.url;
    if (!regpHandle(url) && !regpPdfHandle(url)) {
      window.open(url);
      return;
    }

    const carouserImages = getCarouserImages(normFileList);
    const carouserFirstIndex = carouserImages.findIndex(cfile => cfile.uid === file.uid);
    if (lightBoxRef.current) {
      lightBoxRef.current.toggleLightbox(carouserFirstIndex === -1 ? 0 : carouserFirstIndex);
    }
  }

  function normFile(e: UploadChangeParam) {
    if (Array.isArray(e)) {
      const result = filterFileErrorFlag(e);
      fileListLen.current = result.length;
      setNormFileList(result);
      return filterFileErrorFlag(e);
    }
    const { file, fileList } = e;
    if (file.status === 'done') {
      message.success(`${file.name} 上传成功`);
    } else if (file.status === 'error') {
      message.error(`${file.name} 上传失败`);
    }
    const result = filterFileErrorFlag(fileList);
    fileListLen.current = result.length;
    setNormFileList(result);
    return result;
  }

  const { getFieldDecorator } = form;
  const options = {
    rules,
    initialValue,
    valuePropName: 'fileList',
    getValueFromEvent: normFile,
    ...fieldDecoratorOptions,
  };

  const uploadProps = {
    beforeUpload,
    onRemove,
    listType,
    onPreview,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
    ...widgetPropsRest,
  };
  const carouserImages = useMemo(() => getCarouserImages(normFileList), [normFileList]);

  return (
    <>
      <Form.Item label={label} {...formItemProps}>
        {getFieldDecorator(name, options)(<Upload {...uploadProps}>{renderUploadButton()}</Upload>)}
      </Form.Item>
      {carouserImages.length > 0 ? (
        <Lightbox
          ref={lightBoxRef}
          images={carouserImages}
          renderImageFunc={renderImageFunc}
          renderDescriptionFunc={() => null}
        />
      ) : null}
    </>
  );
};

AUpload.defaultProps = {
  initialValue: undefined,
  widgetProps: {},
  formItemProps: {},
  rules: [],
  fieldDecoratorOptions: {},
};

export default AUpload;
