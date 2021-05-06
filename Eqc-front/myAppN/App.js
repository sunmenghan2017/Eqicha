import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
// import User from './src/userinfor/Userinfor';
import Register from './src/common/Register';
// import Userinfor from './src/userinfor/Userinfor';
// import Mypublish from './src/userinfor/Mypublish';
import Forget from './src/common/Forget';
import Mine from './src/mine/Mine';
import Detail from './src/home/Detail';
import ListDetail from './src/home/ListDetail';

import Job from './src/home/Job';
import Customer from './src/home/Customer';
import Fujinqiye from './src/home/Fujinqiye';
import Detailnews from './src/home/Detailnews';
import Detailjob from './src/home/Detailjob';
import Detailcompany from './src/home/Detailcompany';
import Detailproject from './src/home/Detailproject';
import Boss from './src/boss/Boss';
import Find from './src/find/Find';
import Listcust from './src/home/Listcust';
import Zixun from './src/home/Zixun';
import Detailboss from './src/boss/Detailboss';
import Lianxi from './src/mine/Lianxi';
import Shoucang from './src/mine/Shoucang';
import Qiye from './src/mine/Qiye';
import Biji from './src/mine/Biji';
import Xiugai from './src/mine/Xiugai';

import Date  from './src/home/Date';
import Tousu from './src/mine/Tousu';
import Shezhi from './src/mine/Shezhi';
import Fabu from './src/mine/Fabu';
import Xinzeng from './src/find/Xinzeng';
import Bangdan from './src/find/Bangdan';
import Project from './src/find/Project';
import Touzi from './src/find/Touzi';
import Detailxinzeng from './src/home/Detailxinzeng';
import Detailbangdan from './src/home/Detailbangdan';
// import City  from './src/home/City';



console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
	let [isInstall,setInstall] = useState(true);
	let [isLogin,setLogin] = useState(false);
	let now = 0;
	let init=()=>{
		// AsyncStorage.clear();
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		// AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init()
	},[])
	let afterInstallt=()=>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return (
			<View style={{flex:1}}>
				<SwiperPage afterInstall={afterInstallt}/>	
			</View> 
		)
	}
	
	return (
		<Router
			//引导页
			backAndroidHandler={()=>{
				
				if (Actions.currentScene == "login") {
					if (new Date().getTime() - now < 2000) {
						BackHandler.exitApp();
						return false;
					} else {
						ToastAndroid.show('确定要退出吗', 100);
						now = new Date().getTime();
						return true;
					}
				} 
				if (Actions.currentScene != "home") {
					Actions.pop();
					return true;
				} else {
					ToastAndroid.show('这是首页,请退出登录', 100);
					Actions.homePage();
					return true;
				}
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="#ff4500"
								inactiveTintColor="gray"
								tabBarStyle={{backgroundColor:'#333'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='首页'
									hideNavBar={true}
									icon={
										({focused})=><Icon 
											color={focused?'#ff4500':'gray'} 
											name="home"
										/>
									}
								>
									<Scene key='home' hideNavBar={true} component={Home}/>
									<Scene key='job' hideNavBar component={Job} />
									<Scene key='detailjob' hideNavBar={true} component={Detailjob}/>
									<Scene key='detailnews' hideNavBar={true} component={Detailnews}/>
									</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									title='查Boss'
									icon={
										({focused})=><Icon 
											color={focused?'#ff4500':'gray'} 
											name="search"
										/>
									}
									
								>
									<Scene key="boss" hideNavBar={true} component={Boss}/>
									<Scene key='detailboss' hideNavBar component={Detailboss} />
								</Scene>
								<Scene key='likePage'
									title='发现'
									icon={
										({focused})=><Icon 
											color={focused?'#ff4500':'gray'} 
											name="star"
										/>
									}
									
								>
									<Scene key="find" hideNavBar={true} component={Find}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'#ff4500':'gray'} 
											name='user'/>
										}
									title="我的"
									hideNavBar={true}
									
								>
									<Scene key='mine' hideNavBar={true} component={Mine}/>
									
									<Scene key='tousu' hideNavBar={true} component={Tousu}/>
									<Scene key='shoucang' hideNavBar={true} component={Shoucang}/>
									<Scene key='qiye' hideNavBar={true} component={Qiye}/>
									<Scene key='lianxi' hideNavBar={true} component={Lianxi}/>
									
								</Scene>
								
							</Tabs>
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>
				{/* <Scene key='home' hideNavBar={true} component={Home}/>	 */}
				{/* <Scene key="boss" hideNavBar={true} component={Boss}/>	 */}
				<Scene key="find" hideNavBar={true} component={Find}/>				
				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key='register' hideNavBar component={Register} />
				<Scene key='forget' hideNavBar component={Forget} />
				<Scene key='xiugai' hideNavBar component={Xiugai} />
				<Scene key='fabu' hideNavBar={true} component={Fabu}/>
				<Scene key='detailjob' hideNavBar={true} component={Detailjob}/>
				<Scene key='detailcompany' hideNavBar={true} component={Detailcompany}/>
				<Scene key='detailproject' hideNavBar={true} component={Detailproject}/>
				<Scene key='detailxinzeng' hideNavBar={true} component={Detailxinzeng}/>
				<Scene key='detailbangdan' hideNavBar={true} component={Detailbangdan}/>
								
				{/* <Scene key='mine' hideNavBar={true} component={Mine}/> */}
				
				
				<Scene key='shoucang' hideNavBar={true} component={Shoucang}/>
				<Scene key='shezhi' hideNavBar component={Shezhi}/>
				<Scene key='job' hideNavBar component={Job} />
				<Scene key='customer' hideNavBar component={Customer} />
				<Scene key='fuqi' hideNavBar component={Fujinqiye} />
				<Scene key='xinzeng' hideNavBar component={Xinzeng} />
				<Scene key='bangdan' hideNavBar component={Bangdan} />
				<Scene key='project' hideNavBar component={Project} />
				<Scene key='touzi' hideNavBar component={Touzi} />

				<Scene key='listcust' hideNavBar component={Listcust} />
				<Scene key='zixun' hideNavBar component={Zixun} />
				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
				<Scene key='detail' hideNavBar component={Detail} />
				<Scene key='listdetail' hideNavBar component={ListDetail} />
				
				<Scene key='date' hideNavBar component={Date} />
				
				{/* <Scene key='city' hideNavBar component={City}/> */}
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;
