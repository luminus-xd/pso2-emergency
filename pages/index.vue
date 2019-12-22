<template>
  <main>
    <div class="p-6 bg-gray-200">
      <h2
        class="text-gray-900 text-3xl border-b-2 border-indigo-800 font-bold mb-6"
      >
        予告緊急一覧
      </h2>
      <EmergencyCards :emergencies="datalists" />
    </div>
  </main>
</template>

<script>
import EmergencyCards from '../components/EmergencyCards'

export default {
  head() {
    return {
      titleTemplate: null,
      title: 'PSO2 EQ notice'
    }
  },
  components: {
    EmergencyCards
  },
  async asyncData({ $axios }) {
    const prefixAddZero = number => {
      return number < 10 ? `0${number}` : number
    }

    const now = new Date()
    const year = now.getFullYear()
    const month = prefixAddZero(now.getMonth() + 1)
    const day = prefixAddZero(now.getDate())

    let datalists = {}
    const url = 'https://akakitune87.net/api/v4/pso2emergency'
    const data = {
      EventDate: '' + year + month + day,
      EventType: '緊急'
    }
    let futureDate = 0

    await $axios
      .post(url, data)
      .then(async response => {
        const days = 7
        for (let i = 0; i < days; i++) {
          if (i > 0) {
            const future = new Date(now.getTime() + i * 24 * 60 * 60 * 1000)
            const futureYear = future.getFullYear()
            const futureMonth = prefixAddZero(future.getMonth() + 1)
            futureDate = prefixAddZero(future.getDate())
            const futureData = {
              EventDate: '' + futureYear + futureMonth + futureDate,
              EventType: '緊急'
            }

            await $axios
              .post(url, futureData)
              .then(response => {
                let data = datalists
                datalists[i] = [...response.data]
              })
              .catch(error => {
                console.log(error)
              })
          } else if (i === 0) {
            const data = response.data
            if (data[0].Date === now.getDate()) {
              while (data[0].Hour < now.getHours()) {
                data.shift()
              }
              datalists = [data]
            } else {
              datalists = [data]
            }
          }
        }
      })
      .catch(error => {
        console.log(error)
      })

    return {
      datalists: datalists
    }
  }
}
</script>
