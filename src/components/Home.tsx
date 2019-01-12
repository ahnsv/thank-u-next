import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'
import ProjectList from './Projects/ProjectList';

const HomeHero: React.FunctionComponent = () => (
  <div className={classnames('hero', css.hero)}>
    <div className="hero--text">텍스트</div>
    <div className="hero--image"></div>
  </div>
)
const HomeSearch: React.FunctionComponent = () => (
  <div className={classnames('search', css.search)}>
    <div className="search--input">

    </div>
    <div className="search--result"></div>
  </div>
)
export const Home: React.FunctionComponent = props =>
  (<div className={classnames('home', css.home)}>
    <HomeHero />
    <HomeSearch />
    <ProjectList children={} />
  </div>)