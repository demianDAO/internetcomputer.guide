import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const features = [
  {
    title: (
      <Translate
        id='homepage.features.easy-to-use.title'
        description='Title of feature of Easy to use on the home page'>
        快速上手
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id='homepage.features.easy-to-use'
        description='Feature easy to use'>
        科普互联网计算机的基础和开发基础.
      </Translate>
    )
  },
  {
    title: (
      <Translate
        id='homepage.features.modern-ui.title'
        description='Title of feature of Modern UI on the home page'>
        Tailwind CSS
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{
          Typescript: <code>Typescript</code>,
          reactJS: <code>ReactJS</code>
        }}
        id='homepage.features.modern-ui'
        description='Tailwind'>
        {`使用最新的UI库,解放CSS的痛苦,愉快的使用 {Typescript} and {reactJS} 进行编写.`}
      </Translate>
    )
  },
  {
    title: (
      <Translate
        id='homepage.features.pluggable-extensible.title'
        description='Title of feature of pluggable and extensible on the home page'>
        先简后难
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{ starters: <code>Rust</code> }}
        id='homepage.features.pluggable-extensible'
        description='Feature Pluggable and Extensible'>
        {`使用Motoko进行编写合约,一步步进阶 {starters} 提高代码性能和质量.`}
      </Translate>
    )
  },
  {
    title: (
      <Translate
        id='homepage.features.connect-information.title'
        description='Title of feature of Connect your information on the home page'>
        连接生态
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id='homepage.features.connect-information'
        description='Feature Connect your information'>
        通过dApp的实战,连接到Dfinity的生态应用.
      </Translate>
    )
  },
  {
    title: (
      <Translate
        id='homepage.features.customize-easy.title'
        description='Title of feature of Customize easy on the home page'>
        进阶高级开发
      </Translate>
    ),
    imageUrl: 'img/undraw_add_color.svg',
    description: (
      <Translate
        id='homepage.features.customize-easy'
        description='Feature Customize easy'>
        通过学习算法提高代码和业务性能,并不断扩展视野,创作属于自己的dApp.
      </Translate>
    )
  },
  {
    title: (
      <Translate
        id='homepage.features.powered-by.title'
        description='Title of feature of Powered By on the home page'>
        价值投资,关注IC和区块链动态
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{ autowired: <code>@demiandao</code> }}
        id='homepage.features.powered-by'
        description='Powered by Spring Boot with AngularJS'>
        {`从代码层面关注IC和区块链生态的发展,通过代码分析解读不同角度的生态发展. {autowired} - 我们应该保持着长期的视野，逢低买入那些我们想在未来十年持有的资产，并继续投资我们认为通过突破极限而有可能价值超过 10 亿美元的初创公司位和原子。`}
      </Translate>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt='Awe logo'
              className={styles.heroLogo}
              src={useBaseUrl('img/logo.svg')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate
                id='homepage.hero.title'
                description='Home page hero title, can contain simple html tags'
                values={{
                  lightWeight: (
                    <b>
                      <Translate>light-weight</Translate>
                    </b>
                  ),
                  functional: (
                    <b>
                      <Translate>functional</Translate>
                    </b>
                  ),
                  quickly: (
                    <b>
                      <Translate>quickly</Translate>
                    </b>
                  ),
                  content: (
                    <b>
                      <Translate>content</Translate>
                    </b>
                  )
                }}>
                {`互联网计算机指南(ICP). 专注在 {开发、科普、应用}`}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl('/docs/guides/ic-overview')}>
              <Translate>开始学习</Translate>
            </Link>
            <Link
              className={clsx('margin-left--md', styles.indexTryMeButton)}
              to='https://cmiki-zqaaa-aaaag-aabca-cai.raw.ic0.app/'>
              <Translate>查看 dApp</Translate>
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to='/docs/training/icp-101'>
                  <Translate>从 0 到 1 快速学习ICP开发</Translate>
                </Link>
              )
            }}>
            {`开发Web3 上的 dApp? 干就完事 {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
