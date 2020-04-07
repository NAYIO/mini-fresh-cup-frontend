import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';
import './index.less';

const { Header } = Layout;

function ToolBar({ isLogged }) {
  const history = useHistory();
  const handleClick = () => {
    if (!isLogged) {
      history.push('/login');
    } else {
      //  退出登录
    }
  };
  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'rgb(61, 81, 181)',
      }}
      className="header"
    >
      <div className="title">简 易 版 新 生 杯</div>
      <Button type="link" className="login-button" onClick={handleClick}>
        {isLogged ? '注 销' : '登 录'}
      </Button>
    </Header>
  );
}

export default ToolBar;
