import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function PromotionCard(props) {
  const { notice } = props
  console.log(notice)
  return (
        <Card className='bg-[#4f65f0] dark:bg-yellow-600 text-white flex flex-col w-72 overflow-hidden relative'>
            {/* 宣传栏 */}
            <div>
                <Announcement post={notice} style={{ color: 'white !important' }} />
            </div>
        </Card>
  )
}
