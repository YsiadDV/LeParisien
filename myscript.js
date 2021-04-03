const premium = $('div.premium-bar')
const paywallconnect = $('div#paywall-connect')
const blurText = $('.article-section')
const TextUnblurred = blurText.children()
const arrayLength = TextUnblurred.length
premium.remove()
paywallconnect.remove()

jQuery.each(TextUnblurred, function(index, value){
    $(value).even().removeClass()
})
console.log('LeParisien Premium is active!');