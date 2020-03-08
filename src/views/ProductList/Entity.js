
import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom'
import { getList,getProductById } from '../../requests'
import { baseURL,baseURL_nginx } from '../../constant'
import { Breadcrumb,Menu,Spin } from 'antd';

import './ProductList.less'


    
class Entity extends Component{
    
    constructor(props){
        super(props)
        this.state={
            data:{},
            url:''
        }
        this.triggerStateChange= this.triggerStateChange.bind(this)
        
        this.goLink= this.goLink.bind(this)
        this.handleClick= this.handleClick.bind(this)
        this.componentDidMount= this.componentDidMount.bind(this)
        
    }
    componentDidMount(){
        /**
         * data:{status:0,data: {,list:{}}}
         */
        
        let key= window.location.search.split("=")[1]
        console.log(key)
        getProductById(key).then(data =>{
            console.log(data)
                
            this.setState({data : data})


        })
    }

    handleClick = e => {
        this.props.history.push(`/product?productid=${e.key}`)
      };
    goLink(productId){
        //console.log(this.props)
        this.props.history.push(`/product?productid=${productId}`)
    }
    triggerStateChange(){
        
    }
    categoryTab(){
        return <div className='category-tab'>
             {/* <Menu onClick={this.handleClick} mode="horizontal">
                <Menu.Item key="all">
                    全部险种
                </Menu.Item>
             </Menu> */}
            <div className='box'>
                <div className='row'>
                    <span className='title' >按险种:</span>
                    <Link className='item' to='/productlist' onClick={this.componentDidMount}>全部险种</Link>
                    <Link className='item' to='/productlist?key=4' onClick={this.componentDidMount}> 健康险</Link>
                    <Link className='item' to='/productlist?key=3' onClick={this.componentDidMount}> 意外险</Link>
                    <Link className='item' to='/productlist?key=2' onClick={this.componentDidMount}>航旅险</Link>
                    <Link className='item' to='/productlist?key=1' onClick={this.componentDidMount}> 特色保险</Link>
                    <Link className='item' to='/productlist?key=5' onClick={this.componentDidMount}> 车险</Link>
                </div>
                <div className='row'>
                    <span className='title'>按人群:</span>
                    <a className='item'>全部人群</a>
                    <a className='item'>为自己</a>
                    <a className='item'>为父母</a>
                    <a className='item'>为子女</a>
                </div>
            </div>
             <div className='summary'>
             共找到{this.state.data.size}款产品 
             </div>
        </div>
    }

    itemRender(element){
            
            return (    
                <li key={element.id} className='item'>
                    <span>{element.name}</span>

                    <span>{element.price}</span>
                </li>)


    }
    render(){
        return (
           <div className='wrap'>
                <Breadcrumb separator=">" className='crumb'>
                    <Breadcrumb.Item key='/home'>
                        <Link to='/home' >Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>全部险种</Breadcrumb.Item>
                </Breadcrumb>

               {this.categoryTab()}
               {
                   Object.keys(this.state.data).length === 0 ? 
                   <Spin/> :   
                    <div className='category-cout'>
                        <ul>
                            {this.state.data.list.map(element => {
                                
                                return this.itemRender(element)
                            })}

                        </ul>

                    </div>
               }
           </div>
        )

    }


}

export default withRouter(Entity);
