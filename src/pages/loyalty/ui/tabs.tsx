
import { useMirror } from '../store'

export default function Tabs() {
    const tabs = useMirror("tabs")
    const onChangeTabs = useMirror("onChangeTab")

  return (
    <div className='flex flex-col items-stretch md:items-center md:flex-row justify-between gap-3 md:gap-0'>
        {
            tabs.map((tab)=>(
                <button key={`tab id ${tab.id}`} onClick={()=>onChangeTabs(tab.id)} className={`px-10 py-4 cursor-pointer border ${tab.isActive? "border-[#ED6A22]":" border-[#EEEEEE]"} rounded-md hover:scale-105 duration-200`}>
                    <div className='flex items-center gap-2'>
                        <img src={tab.isActive? tab.active_Icon : tab.icon } alt="icon"/>
                            <span className={`text-sm sm:text-lg ${tab.isActive? "text-[#ED6A22]":"text-[#8B8B8B]"}`}>{tab.title}</span>
                    </div>
                </button>
            ))
        }
    </div>
  )
}
