
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { getList } from '../../requests'
import { baseURL,baseURL_nginx } from '../../constant'
import './Home.less'

const imgUrlTest = [
    {img : '/file/picture/home/尊享e生2019.png'},
    {img : '/file/picture/home/尊享e生爸妈版.png'},
    {img : '/file/picture/home/众享e家意外险.png'},
    {img : '/file/picture/home/飞享e生.png'},
    {img : '/file/picture/home/保骉车险.png'},
]
    
class Entity extends Component{
    
    constructor(props){
        super(props)
        this.state={arrayData : []}
    }
    componentDidMount(){
        getList().then(resp =>{
            
            let tempArrayData = resp.data.list
            tempArrayData.map((value,index)=>{
                Object.assign(value,imgUrlTest[index])
            })
            this.setState({arrayData : tempArrayData})

        })
    }

    render(){
        return (
            <div className='home-entity'>
            <div className='home-slider'>
                <a href={baseURL + '/productId=1234'}>
                    <img src={baseURL_nginx + '/file/picture/home/首页横幅_1.png'} alt='尊享e生' />
                </a>
                
            </div>
            <div className='home-jingxuan'>
                <div className='home-jingxuan-title'>
                    众安精选
                </div>
                <ul>{this.JingxuanList()}</ul>
            </div>
        </div>
        )

    }

    goLink(productId){
        //console.log(this.props)
        this.props.history.push(`/product?productid=${productId}`)
    }
    JingxuanList(){
        
        return <div>
            {
                this.state.arrayData.map(
                    (item,index)=>{
                        return (
                                                    
                            <li className={index=== 0 ? 'home-jingxuan-item-first' : 'home-jingxuan-item'} key={item.productName} >
                                   <a onClick={this.goLink.bind(this,item.productId)} style=
                                        {{
                                         backgroundImage : `url(${baseURL_nginx+ item.img})` ,
                                         backgroundSize : '100% 100%',
                                         }}>
                                         <div className='detail'>
                                            <h2 className='prodcut-name'>{item.productName}</h2>
                                            <p className='summary'>{item.summary}</p>
                                            <span className='s1'>{item.lowestPrice}</span><span className='s2'>元起</span>
                                            <p className='hide'>了解详情</p>
                                         </div>
                                    </a> 
                            </li>
                        )

                        }
                    )
            }
        </div>
    }
}

export default withRouter(Entity);