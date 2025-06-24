import { useSlider } from '@/hooks'

function useTabs<T>(tabsData: T[]) {
    return useSlider(tabsData, 1)
}

export default useTabs