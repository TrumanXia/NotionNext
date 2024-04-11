import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative flex-shrink-0 dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            {/* 颜色过度区 */}
            <div id='color-transition' className='h-16 '>

            </div>

            {/* 社交按钮 */}
             <div className='w-full h-24'>
                <SocialButton />
            </div>

            <br />

            {/* 底部页面信息 */}
          <div id='footer-bottom'
               className='w-full h-35 flex flex-col p-3 justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#30343f]'>

            <div id='footer-bottom-left'>
              NotionNext {siteConfig('VERSION')} <i className='fas fa-copyright' /> {`${copyrightDate}`} <i
              className='mx-1 animate-pulse fas fa-heart' /> <a href={siteConfig('LINK')}
                                                                className='underline font-bold text-lg gradient-text'>{siteConfig('AUTHOR')}</a>.
            </div>

            <div id='footer-bottom-middle'>
              网站声明：1. 请浏览者务必遵守所在地法律！
              2. 本网站提供所有资源均是互联网上资源，站长辛苦收集整理。
              但如果相关方觉得内容有争议，请通过本站提供的各种联系方式联系站长。
              站长核实后，会做相应处理！
            </div>

            <div id='footer-bottom-right'>
              {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/'
                                                                                className='mr-2'>{siteConfig('BEI_AN')}</a></>}

              <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
              <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>

              {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}

            </div>
          </div>
        </footer>
  )
}

export default Footer
