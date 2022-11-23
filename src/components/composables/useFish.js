import { ref } from 'vue'
import useApi from '@/composables/useApi'

const fish = ref([])
const currentFish = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)
const useFish = () => {
  const fetchFishes = async () => {
    const { data } = await api.instance.get('/fish', {
      params: {
        page: page.value,
      },
    })
    fish.value.push(...data.data)
    page.value++
  }
  const fetchFish = async (fishID) => {
    const { data } = await api.instance.get(`/fish/${fishID}`)
    currentFish.value = data
  }

  return {
    fish,
    fetchFishes,
    fetchFish,
    currentFish,
    firstLoad,
  }
}

export default useFish
