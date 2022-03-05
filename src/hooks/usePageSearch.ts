import PageContent from '@/components/page-content'
import { ref } from 'vue'
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const resetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }
  const searchBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [searchBtnClick, resetBtnClick, pageContentRef]
}
