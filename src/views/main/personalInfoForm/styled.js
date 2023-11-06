import styled from "styled-components";

export const PersonalInfoFormWrapper = styled.div`
  margin: 10px 6px;
  padding: 6px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  .PersonalInfoForm {
    padding: 0 10px;
    .PersonalInfoForm-Avatar {
      .ant-row {
        .ant-col {
          .ant-form-item-control-input {
            .ant-form-item-control-input-content {
              display: flex;
              justify-content: end;
            }
          }
        }
      }
    }
  }
`;

export const EditAvatarWrapper = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  .ant-avatar {
    background-color: #f2f2f2;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    .EditAvatar-upload {
      opacity: 1;
      visibility: visible;
    }
    .delete-logo {
      opacity: 1;
    }
  }
  .EditAvatar-upload {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  .EditAvatar-uploadIcon {
    color: white;
    font-size: 22px;
  }
  // 上传头像
  .EditAvatar-modal {
    .ant-modal-content {
      border-radius: 6px;
      .ant-modal-header {
        border: none;
        border-radius: 6px;
      }
      .ant-modal-body {
      }
      .ant-modal-footer {
      }
    }
  }

  .delete-logo {
    position: absolute;
    top: 0;
    color: #999;
    opacity: 0;
  }
`;
