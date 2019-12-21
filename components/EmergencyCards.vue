<template>
  <div>
    <div v-for="(date, indexDate) in emergencies" :key="indexDate">
      <div class="text-lg font-bold mb-4">{{ `${date[0].Month}月${date[0].Date}日` }}</div>
      <ul class="card-index mb-8">
        <li
          v-for="(emergency, index) in date"
          :key="index"
          class="max-w rounded overflow-hidden bg-white shadow-lg"
        >
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">{{ emergency.EventName }}</h3>
            <p class="text-gray-700 text-base">
              {{
                `${emergency.Month}月${emergency.Date}日 ${emergency.Hour}時${emergency.Minute}分`
              }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.card-index {
  --column-count: 1;
  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
  grid-gap: 32px;

  @media screen and (min-width: 768px) {
    --column-count: 2;
  }
  @media screen and (min-width: 1064px) {
    --column-count: 3;
  }
}
</style>

<script>
export default {
  props: ['emergencies']
}
</script>
