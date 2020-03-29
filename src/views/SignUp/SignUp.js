import React, { useState,Component } from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  message
} from 'antd';

import bg from './bg-big.png';
import  './Signup.less';
import { signup } from '../../requests'
//import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    if(!values.aggrement){
      message.warn("请同意用户协议")
    }
    
    let requestData = {
      username:values.username,
      password:values.password,
      phone:values.phone,
      email:values.email,
      question:values.question,
      answer:values.answer}

    
    let registerSuccessUserProfileAddress = signup(requestData)
    
    console.log(registerSuccessUserProfileAddress)
    //window.location = registerSuccessUserProfileAddress
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="81">+81</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="密码确认"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {type :'email'}
        ]}
      >
        <Input
          
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="电话号码"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item name='question' label="密码找回问题"
        rules={[{
          required : true,
          message : 'Please input your private question!'
        }]} 
      >
        <Input />
      </Form.Item>
      <Form.Item name='answer' label="密码找回答案"
        rules={[{
          required : true,
          message : 'Please input your private anwser!'
        }]} 
      >
        <Input />
      </Form.Item>

      <Form.Item name="aggrement" valuePropName="checked" {...tailFormItemLayout}>
        <Checkbox>
          I have read the <a href="https://login.zhongan.com/passport/agreement.htm?sourceApp=1&target=https://www.zhongan.com/open/member/loginJump?logincallback=/account/myAccount">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};


class SignUp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='signup-top'> </div>
        <div className='bg-wrap'>
          <div className='pos-img'>
            <img alt='zhongan' className='img' src={bg}></img>
          </div>
          <div className='za-rect-box'>
            <div className='register-box'> 
              <p1>注册众安</p1>
              <RegistrationForm className='register-table'/>
            </div>
            
          </div>
        </div>
        <div >

        </div>
      </div>

    );
  }
}

export default SignUp;