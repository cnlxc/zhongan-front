import React, { Component } from 'react'
import { Icon } from 'antd'

const zhongan = {
    head : '众安保险',
    list : [
        {name:'关于我们',url:'https://www.zhongan.com/corporate/'},
        {name:'新闻中心',url:'https://www.zhongan.com/channel/about/newsList.html'},
        {name:'加入我们',url:'https://www.zhongan.com/open/about/job'},
        {name:'隐私声明',url:'https://www.zhongan.com/channel/about/website.html'},
        {name:'风险提示',url:'https://www.zhongan.com/channel/about/fengxiantishi.html'},
        {name:'反洗钱专栏',url:'https://www.zhongan.com/channel/about/fxqflfg.html'},
        {name:'众安廉政',url:'https://www.zhongan.com/channel/about/zalz.html'},
        ]
}

const explore = {
    head : '发现',
    list : [
        {name:'网站地图',url:'https://www.zhongan.com/channel/sitemap/sitemap.html'},
        {name:'车险计算器',url:'https://www.zhongan.com/chexianjisuanqi/'},
        {name:'众安科技',url:'https://www.zhongan.io/'},
        {name:'众安开放平台',url:'http://open.zhongan.com'},
        {name:'众安小贷',url:'https://xd.zhongan.io/'},
        {name:'投诉与建议',url:'https://www.zhongan.com/open/about/feedback'},
        {name:'众安安全应急响应中心',url:'https://security.zhongan.com/'},    
        ]
}

const subscribe = {
    head : '发现',
    list : [
        {name:'微信公众号',url:'',type:'wechat'},
        {name:'支付宝窗口',url:'',type:'alipay'},   
        ]
}
const customeService = {
    head : '客户服务',
    list : [
        {name:'全国统一服务热线', serviceTime :'7*24小时' ,phone:'1010-9955', url:''},
        {name:'举报建议及投诉电话', serviceTime :'' ,phone:'021-80399188', url:''},
        {name:'客服邮箱', serviceTime :'' ,phone:'', url:'cs@zhongan.com'},
        {name:'保险欺诈举报邮箱', serviceTime :'' ,phone:'021-80399188', url:'jubao@zhongan.com'},
        ]
}

function Home() {
    return <h2>Home</h2>;
  }
function CustomeServiceRender() {
    return (
        <div className='help-item'>
            <h4>{customeService.head}</h4>
            <div className="help-item help-item-server">
                <div className="server-tel" style={{'fontSize':'16px'}}>
                    <i className="icon-tel"></i><span className="tel-numb" style={{'fontSize':'16px'}}>1010-9955</span>
                    <div>
                        全国统一服务热线
                    </div>
                    <div>
                        健康险报案服务时间：7×24小时
                    </div>
                </div>
                <div className="server-tel" style={{'fontSize':'16px'}}>
                    <i className="icon-tel"></i><span className="tel-numb" style={{'fontSize':'16px'}}>021-80399188</span>
                    <div>
                        举报建议及投诉电话
                    </div>
                </div>
                <p className="server-email" style={{'fontSize':'15px'}}>
                    <i className="icon-email"></i><a href="mailto:cs@zhongan.com">客服邮箱：cs@zhongan.com</a>
                </p>
                <p className="server-email" style={{'fontSize':'15px'}}>
                    <i className="icon-email"></i><a href="mailto:jubao@zhongan.com">保险欺诈举报邮箱：jubao@zhongan.com</a>
                </p>
            </div>
        </div>
        
    );
    
}
class Tail extends Component {

    showImg = (id) =>{
        document.getElementById(id).style.display='block';
    }
    hideImg = (id) =>{
        document.getElementById(id).style.display='none';
    }

    render() {
        return (
            <div className='tail'>
                <div className='help-item'>
                    <h4>{zhongan.head}</h4>
                    <ul>
                        {zhongan.list.map(i =>{
                            return <li key={i.name}><a href={i.url} target="_blank" title={i.name} rel="nofollow">{i.name}</a></li>
                        })}
                    </ul>
                </div>
                <div className='help-item'>
                    <h4>{explore.head}</h4>
                    <ul>
                        {explore.list.map(i =>{
                            return <li key={i.name} ><a href={i.url} target="_blank" title={i.name} rel="nofollow">{i.name}</a></li>
                        })}
                    </ul>
                </div>
                <div className='help-item'>
                    <h4>{subscribe.head}</h4>
                    <ul>
                        {subscribe.list.map(i =>{
                            return <span key={i.name}  onMouseOut={this.hideImg.bind(this,i.type)}  onMouseOver={this.showImg.bind(this,i.type)}>
                                <Icon type={i.type} /><li key={i.name} ><a href={i.url} target="_blank" title={i.name} rel="nofollow">{i.name}</a></li>
                            </span>
                            
                        })}
                    </ul>

                        <div id="wechat" style={{display : 'none'}} >微信二维码</div>    
                        <div id="alipay" style={{display : 'none'}} >支付宝二维码</div>
                </div>
                    <CustomeServiceRender />
            </div>
            
        );
        
    }
}

export default Tail;