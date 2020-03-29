import React, { Component } from 'react';
import {Link,useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox,Icon,Col,Row } from 'antd';
import bg from './bg-big.png';
import { signin } from '../../requests'
import './Login.less'
import {ACCESS_TOKEN} from '../../constant'

const NormalLoginForm = () => {

  let hisotry = useHistory()

  const onFinish = values => {
    console.log('Received values of form: ', values);
    signin(values.usernameOrEmail,values.password).then(resp=>{
      console.log(resp)
      window.localStorage.setItem(ACCESS_TOKEN,resp)
      hisotry.push('account/myAccount')
    })
    
  };

  return (

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
          <Row>
      <Col offset={4} span={16}>
      <Form.Item
        name="usernameOrEmail"
        rules={[
          {
            required: true,
            message: 'Please input your usernameOrEmail!',
          },
        ]}
      >
        <Input prefix={<Icon type='UserOutlined' className="site-form-item-icon" />} placeholder="UsernameOrEmail" />
      </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col offset={4} span={16} >
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<Icon type='LockOutlined' className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      </Col>
    </Row>
 
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/forget_password">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

class Login extends Component {
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
              <p1>账号登陆</p1>
              <NormalLoginForm className='register-table'/>
            </div>
            
          </div>
        </div>
        <div >

        </div>
      </div>
    );
  }
}

export default Login;