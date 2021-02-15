import { Col, Menu, Row } from 'antd';
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
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    <Menu 
                    onClick={ handleClick }
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['rentalHandle', 'contentHandle']}
                    mode="inline">
                    <SubMenu key="rentalHandle" title="대여 관리">
                        <Menu.Item key="rentalApply"><Link href="/rentalApply"><a>대여 신청</a></Link></Menu.Item>
                        <Menu.Item key="deliveryReady"><Link href="/deliveryReady"><a>배송 준비</a></Link></Menu.Item>
                        <Menu.Item key="deliverying"><Link href="/deliverying"><a>배송 중</a></Link></Menu.Item>
                        <Menu.Item key="deliveryComplete"><Link href="/deliveryComplete"><a>배송 완료</a></Link></Menu.Item>
                        <Menu.Item key="returnReady"><Link href="/returnReady"><a>반납 대기</a></Link></Menu.Item>
                        <Menu.Item key="returning"><Link href="/returning"><a>반납 중</a></Link></Menu.Item>
                        <Menu.Item key="rentalComplete"><Link href="/rentalComplete"><a>완료된 대여</a></Link></Menu.Item>
                        <Menu.Item key="rentalReject"><Link href="/rentalReject"><a>거절한 대여</a></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="contentHandle" title="콘텐츠 관리">
                        <Menu.Item key="content"><Link href="/content"><a>콘텐츠</a></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="eventHandle" title="이벤트 관리">
                        <Menu.Item key="eventControl"><Link href="/eventControl"><a>이벤트 관리</a></Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                </Col>
                <Col xs={24} md={18}>
                    {children}
                </Col>
            </Row>
        </div>
    )
}

export default AppLayout;