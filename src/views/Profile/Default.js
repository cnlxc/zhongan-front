import React, { Component } from 'react';
import { Layout,Table,Space } from 'antd';
import { getOrderByUserId, getOrderByinsuredName } from '../../requests'
const {Header,Content} = Layout

const dataSource = [
    {
      key: '1',
      productName: '众享e生',
      insuranceTerm: '2021/04/02',
      price: '15000',
      status : '保障中'
    },
    {
      key: '2',
      productName: '碎屏险',
      insuranceTerm: '2021/04/02',
      price: '15000',
      status : '待续保'
    },
  ];
  
  const columns = [
    {
      title: '保险产品',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '保险期限',
      dataIndex: 'insuranceTerm',
      key: 'insuranceTerm',
    },
    {
      title: '金额',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ];
class Default extends Component {

    constructor(props){
        super(props);
        
    }
    componentDidMount(){
      getOrderByUserId(this.props.user.id).then(resp=>{
        console.log(resp);
      })
      getOrderByinsuredName(this.props.user.username).then(resp=>{
        console.log(resp);
      })
    }
    //{this.props.user.username}
    //{this.getCurrentTime()}
    getCurrentTime(){
        
        let cur = new Date();
        switch(cur.getHours()){
            case 1: case 2: case 3: case 4:  return "深夜了，"
            case 5: case 6: case 7: case 8: case 9: case 10: case 11:  return "早上好,"
            case 12: case 13: return "中午好,"
            case 14: case 15: case 16: case 17: case 18 : return "下午好,"
            case 19: case 20: case 21: case 22: case 23: case 0 : return "晚上好,"
        }
           
        
        
    
    }
    render() {
        const {user} =this.props;
        console.log(user)

        return (
            
            <Layout>
                <Header style={{fontSize:25 , color : 'white'}}>
                    {this.getCurrentTime()}{user.username}
                </Header>
                <Space>
                    <div><span>年付保费</span>10万元</div>
                    <div><span>总保额</span>100万元</div>
                </Space>
                     
                <Content>
                    <Table columns={columns} dataSource={dataSource} />
                </Content>
            </Layout>

        );
    }
}

export default Default;