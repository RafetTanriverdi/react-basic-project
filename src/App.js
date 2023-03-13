import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'
import AddCategory from './views/Categories/Add'
import CategoryList from './views/Categories/List'
import CategoryUpdate from './views/Categories/Update'
import CategoryDetail from './views/Categories/Detail'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SiteHeader from './views/layout/SiteHeader'
import SiteFooter from './views/layout/SiteFooter'
import { routes } from './routes/routes'

const { Header, Content, Footer } = Layout;


function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (<>

    <Layout>

      <SiteHeader />
      <Content className="site-layout" style={{ padding: '0 50px' }}>


        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>

          <Routes>
            {
              routes.map((item) => {
                return <Route path={item.path} element={item.element}></Route>
              })
            }
          </Routes>

        </div>
      </Content>

      <SiteFooter />
    </Layout>





  </>
  )
}

export default App