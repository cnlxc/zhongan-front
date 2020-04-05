import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, notification } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  InsuranceOutlined,
  TeamOutlined,
  FileSearchOutlined
} from '@ant-design/icons';


import LoadingIndicator  from '../Frame/LoadingIndicator';
import './Profile.css';
import NotFound from '../NotFound/NotFound';
import ServerError from '../NotFound/ServerError';
import {getCurrentUser} from '../../requests'
import { Head1,Head2,Tail } from '../Frame';
import Default from './Default';
import MyOrder from './MyPolicy';
import GroupOrder from './GroupOrder';
import ClaimInquiry from './ClaimInquiry';
import MyDetailInformation from './MyDetailInformation';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            selected : "0"
        }
        this.loadUserProfile = this.loadUserProfile.bind(this);
        this.profileDisplaySwitch = this.profileDisplaySwitch.bind(this);
        this.displaySwitchProcesser = this.displaySwitchProcesser.bind(this);
    }

    loadUserProfile() {
        this.setState({
            isLoading: true
        });

        getCurrentUser().then(resp=>{
          console.log('zheli')
            console.log(resp)
            this.setState({user : resp,isLoading : false})
        }).catch(err=>{
          this.setState({isLoading : false})
          //notification.open({description:'请先登陆'})
        })
   
    }
      

    profileDisplaySwitch = function({ item, key, keyPath, domEvent }){
      this.setState({selected : key});
    }

    displaySwitchProcesser(key){
      switch(key){
        case "0" : return <Default user={this.state.user}/>
        case "1" : return <MyOrder user={this.state.user} /> 
        case "2" : return <GroupOrder user={this.state.user} />
        case "3" : return <ClaimInquiry user={this.state.user} />
        case "4" : return <MyDetailInformation user={this.state.user} />
        default : return <p1>nothing</p1>
      }
    }

    componentDidMount() {
        
        this.loadUserProfile();
    }

    // componentDidUpdate(nextProps) {
    //     if(this.props.match.params.username !== nextProps.match.params.username) {
    //         this.loadUserProfile(nextProps.match.params.username);
    //     }        
    // }

    render() {

      
       /* if(this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if(this.state.notFound) {
            return <NotFound />;
        }

        if(this.state.serverError) {
            return <ServerError />;
        }*/

        return (
            <div className="wrap">
                <Head1/>
                <Head2/>
                <Breadcrumb separator=">" className='crumb'>
                    <Breadcrumb.Item key='/home'>
                        <Link to='/home' >众安保险</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                </Breadcrumb>
                <div className="profile">
                    { 
                        this.state.user ? (
                            
                                <Layout style={{ minHeight: '100vh' }} >
                                  <Sider trigger={null} >
                                    <div className="logo" />
                                    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" onClick={this.profileDisplaySwitch}>
                                    <Menu.Item key="0">
                                        <UserOutlined />
                                        <span>个人中心</span>
                                      </Menu.Item>
                                      <Menu.Item key="1">
                                        <FileSearchOutlined />
                                        <span>我的订单</span>
                                      </Menu.Item>
                                      <Menu.Item key="2">
                                        <TeamOutlined />
                                        <span>团险保单</span>
                                      </Menu.Item>
                                      <Menu.Item key="3">
                                        <InsuranceOutlined />
                                        <span>理赔查询</span>
                                      </Menu.Item>
                                      <Menu.Item key="4">
                                        <UserOutlined />
                                        <span>我的资料</span>
                                      </Menu.Item>
                                      <Menu.Item key="5">
                                        <FileSearchOutlined />
                                        <span>我的积分</span>
                                      </Menu.Item>

                                    </Menu>
                                  </Sider>
                                  
                                  {this.displaySwitchProcesser(this.state.selected)}                                    

                                </Layout>
                            
                        ):   <div><Link to='/login'>请登陆</Link></div>           
                    }
                </div>
                <Tail/>
            </div>

        );
    }


}

export default withRouter(Profile);