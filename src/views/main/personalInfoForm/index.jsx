import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Avatar,
  Typography,
  Modal,
  Upload,
} from "antd";
import {
  UserOutlined,
  CameraOutlined,
  CloseCircleFilled,
  SnippetsOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import { PersonalInfoFormWrapper, EditAvatarWrapper } from "./styled";
const { Item } = Form;
const { Title } = Typography;
const { Dragger } = Upload;

export default function PersonalInfoForm() {
  const [infoForm] = Form.useForm();
  const [personalInfo, setPersonalInfo] = useState({
    avatar: null,
    birthDt: null,
    email: null,
    name: null,
    phone: null,
    sex: null,
    startWorkDt: null,
    wxNum: null,
  });
  const dateFormat = "YYYY-MM";
  const sexOptions = [
    {
      label: "男",
      value: "1",
    },
    {
      label: "女",
      value: "0",
    },
  ];

  // 字段更新触发
  const personalInfoChange = (changedFields, allFields) => {
    console.log("changedFields", changedFields);
    console.log("allFields", allFields);
    setPersonalInfo({ ...allFields });
  };
  return (
    <PersonalInfoFormWrapper>
      <Title level={4}>基本信息</Title>
      <Form
        className="PersonalInfoForm"
        form={infoForm}
        layout="vertical"
        onValuesChange={personalInfoChange}
      >
        <Item className="PersonalInfoForm-Avatar" name="avatar">
          <EditAvatar formData={personalInfo} />
        </Item>
        <Item label="姓名" name="name">
          <Input />
        </Item>
        <Item label="性别" name="sex">
          <Select placeholder="请选择性别" options={sexOptions} />
        </Item>
        <Item label="出生年月" name="birthDt">
          <DatePicker format={dateFormat} picker="month" />
        </Item>
        <Item label="手机号" name="phone">
          <Input />
        </Item>
        <Item label="微信号" name="wxNum">
          <Input />
        </Item>
        <Item label="邮箱" name="email">
          <Input />
        </Item>
        <Item label="首次参加工作时间" name="startWorkDt">
          <DatePicker format={dateFormat} picker="month" />
        </Item>
      </Form>
    </PersonalInfoFormWrapper>
  );
}

// 上传头像
function EditAvatar({ value, onChange, formData }) {
  const [isModalVisible, setIsModalVisible] = useState(false); // 编辑状态

  // 上传头像
  const avatarUpload = (link) => {
    onChange?.(link);
  };

  // 删除logo
  const deleteLogo = () => {
    onChange?.(null);
  };

  return (
    <EditAvatarWrapper>
      {!!value ? (
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          src={value}
        />
      ) : (
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          icon={<UserOutlined />}
          style={{
            color: "#fff",
            backgroundColor: "#0077f2",
          }}
        >
          {formData.name?.substring(0, 1)}
        </Avatar>
      )}
      <div className="EditAvatar-upload">
        <CameraOutlined
          title="上传logo"
          className="EditAvatar-uploadIcon fontsize-14"
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      {!!value && (
        <CloseCircleFilled
          title="删除logo"
          className="delete-logo"
          onClick={deleteLogo}
        />
      )}
      <Modal
        title="上传头像"
        className="EditAvatar-modal"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <ImgUpload
          avatarUpload={avatarUpload}
          onCancel={() => setIsModalVisible(false)}
        />
      </Modal>
    </EditAvatarWrapper>
  );
}

// 图片上传
function ImgUpload(props) {
  const { avatarUpload, onCancel } = props;
  const dataSource = {
    maxCount: 1,
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png" || file.type === "image/jpeg";
      if (!isPNG) {
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange(info) {
      onCancel();
      const { status, response } = info.file;
      if (status == "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        if (response.resultCode == 200) {
          avatarUpload(response.link);
        } else {
        }
      } else if (status === "error") {
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  // 预览/裁剪图片
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop
      modalClassName="clippingImgCrop"
      rotate
      modalTitle={"编辑图片"}
      modalOk="确认"
      modalCancel="取消"
    >
      <Dragger {...dataSource} onPreview={onPreview}>
        <p className="ant-upload-drag-icon">
          <SnippetsOutlined />
        </p>
        <p className="ant-upload-text">点击或拖动图片至此处</p>
      </Dragger>
    </ImgCrop>
  );
}
