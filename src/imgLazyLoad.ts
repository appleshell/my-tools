let imgLists: any = document.querySelectorAll('img')
const imgNum = imgLists.length
const imgArray = [...imgLists]

function imgLazyLoad () {
  let count = 0
  return function () {
    let loadedImgList = []

    imgLists.forEach((img, i) => {
      const rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        // 每当img元素出现在视口中时，使用dataset替换src属性
        img.src = img.dataset.src
        loadedImgList.push(i)
        count++
        if (count === imgNum) {
          // 图片加载完毕，移除scroll事件
          document.removeEventListener('scroll', imgLazyLoad())
        }
      }
    })

    // 更新未加载的img，从img元素列表中移除已加载的img
    imgLists = imgArray.filter((_, index) => { !loadedImgList.includes(index) })
  }
}

document.addEventListener('scroll', imgLazyLoad())

export default imgLazyLoad
