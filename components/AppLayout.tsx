import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { Component } from 'react';

const { SubMenu } = Menu;

function AppLayout ({ children }) {
    var handleClick = e => {
        console.log('click ', e);
      };
    return (
        <div>
            <Menu 
                onClick={ handleClick }
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['rentalHandle', 'contentHandle']}
                mode="inline">
                <SubMenu key="rentalHandle" title="대여 관리">
                    <Menu.Item key="rentalApply"><Link href="../pages/rentalApply"><a>대여 신청</a></Link></Menu.Item>
                    <Menu.Item key="deliveryReady"><Link href="../pages/deliveryReady"><a>배송 준비</a></Link></Menu.Item>
                    <Menu.Item key="deliverying"><Link href="../pages/deliverying"><a>배송 중</a></Link></Menu.Item>
                    <Menu.Item key="deliveryComplete"><Link href="../pages/deliveryComplete"><a>배송 완료</a></Link></Menu.Item>
                    <Menu.Item key="returnReady"><Link href="../pages/returnReady"><a>반납 대기</a></Link></Menu.Item>
                    <Menu.Item key="returning"><Link href="../pages/returning"><a>반납 중</a></Link></Menu.Item>
                    <Menu.Item key="rentalComplete"><Link href="../pages/rentalComplete"><a>완료된 대여</a></Link></Menu.Item>
                    <Menu.Item key="rentalReject"><Link href="../pages/rentalReject"><a>거절한 대여</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="contentHandle" title="콘텐츠 관리">
                    <Menu.Item key="content"><Link href="../pages/content"><a>콘텐츠</a></Link></Menu.Item>
                </SubMenu>
            </Menu>
            {children}
        </div>
    )
}

export default AppLayout;