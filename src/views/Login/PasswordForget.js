import React, { Component } from 'react';
import {useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox,Icon,Col,Row } from 'antd';
import bg from './bg-big.png';
import { forgetPasswordGetQuestion,checkAnswer,resetPasswordByToken } from '../../requests'
import './Login.less'

//1 : getQuestion
//2 : checkAnwser
//3 : newPassword
//4 : redirctToProfile

const PasswordResetStage1 = (props) => {
    const onFinish = values => {
        //console.log('Received values of form: ', values);
        forgetPasswordGetQuestion(values.username).then(resp=>{
            console.log(resp)
            if (typeof(resp) === 'null' || typeof(resp) === 'undefined'){
                console.log('gg')
                return
            }else{
                props.updateState(2,{username : values.username,question : resp})  
            }
               
            
        })
        
        };
  return (
    <Form
      name="password_forget_table1"
      onFinish={onFinish}
    >
    <Row>
      <Col offset={4} span={16}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<Icon type='UserOutlined' className="site-form-item-icon" />} placeholder="Username Or Email" />
      </Form.Item>
      </Col>
    </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Next
        </Button>
      </Form.Item>
    </Form>

  );
};
const PasswordResetStage2 = (props) => {
    const onFinish = values => {
      //console.log('Received values of form: ', values);
      checkAnswer(props.info.username,values.answer,props.info.question).then(resp=>{
        if (typeof(resp) === 'null' || typeof(resp) === 'undefined'){
            console.log('gg')
            return
        }else{
            props.updateState(3,{
                answer   : values.answer,
                token : resp
              })
        }
      })
    };
    return (
      <Form
        name="password_forget_table2"
        onFinish={onFinish}
      >
        <Row>
            <Col offset={4} span={16}>
                <label>问题:{props.info.question}</label>
            </Col>
        </Row>
      <Row>
        <Col offset={4} span={16}>
        <Form.Item
          name="answer"
          rules={[
            {
              required: true,
              message: 'Please input your answer!',
            },
          ]}
        >
          <Input prefix={<Icon type='UserOutlined' className="site-form-item-icon" />} placeholder="Answer" />
        </Form.Item>
        </Col>
      </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Next
          </Button>
        </Form.Item>
      </Form>
  
    );
  };


const PasswordResetStage3 = (props) => {
    //hook
    let history = useHistory();
    
    const onFinish = values => {
        //console.log('Received values of form: ', values);
        resetPasswordByToken(props.info.username,values.newPassword,props.info.token).then(resp=>{
            if (typeof(resp) === 'null' || typeof(resp) === 'undefined'){
                console.log('gg')
                return
            }else{
                history.push("/login")
            }
        })
    };
    return (
        <Form
        name="password_forget_table3"
        onFinish={onFinish}
        >
            <Row>
                <Col offset={4} span={16}>
                    <label>{props.info.username}</label>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={16}>
                    <Form.Item
                        name="newPassword"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your new password!',
                        },
                        ]}
                    >
                        <Input prefix={<Icon type='UserOutlined' className="site-form-item-icon" />} placeholder="new password" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Next
                </Button>
            </Form.Item>
        </Form>

    );
};
class PasswordForget extends Component {
    constructor(props){
        super(props)
        this.state={
            stage:1,
            info : {
                 username : "",
                 question : "",
                 answer  : "",
                 newPassword  : "",
                 token    : ""
            }
        }
        this.updateState = this.updateState.bind(this);
    }
    componentDidMount(){
            //this.setState({stage : stage})
        
    }
    updateState = (nextStage,info) => {
        this.setState(Object.assign(this.state,{stage : nextStage,info : Object.assign(this.state.info,info)}) ) 
    }
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
              <p1>找回密码</p1>
              {this.state.stage === 1 ? <PasswordResetStage1 updateState={this.updateState} info = {this.state.info} /> : this.state.stage === 2
                         ? <PasswordResetStage2 updateState={this.updateState}  info = {this.state.info} /> : this.state.stage === 3
                         ? <PasswordResetStage3 updateState={this.updateState}  info = {this.state.info} /> : 4
                 
            
              }
              
            </div>
            
          </div>
        </div>
        <div >

        </div>
      </div>
    );
  }
}

export default PasswordForget;