// import swiper from 'swiper'
// import clipboard from 'clipboard'
// import 'node_modules/fullpage.js/vendors/scrolloverflow'
import '../css/fullpage.css'
import '../css/main.scss'
import fullpage from './fullpage'

!(function($,win) {
    const fullPageInstance = new fullpage('#fullpage', {
        licenseKey: '1223545654',
        navigation: false,
        controlArrows: false,
        onSlideLeave(section, origin, destination, direction){
            if (origin.index == 0) {
                $('.hdxz').addClass('hide')
                $('.hdxz').one('webkitTransitionEnd', () => {
                    $('.ptgz').removeClass('hide')
                })
            } else {
                $('.ptgz').addClass('hide')
                $('.ptgz').one('webkitTransitionEnd', () => {
                    $('.hdxz').removeClass('hide')
                })
            }
        }
        // scrollHorizontally: true
        // sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
    });

    document.querySelector('#nextBtn').addEventListener('click',() => {
        fullPageInstance.moveSlideRight()
    })
    document.querySelector('#prevBtn').addEventListener('click',() => {
        fullPageInstance.moveSlideLeft()
    })

    $('.bottom-btn').click(function(){
        $(this).parents('.bottom').toggleClass('open')
        $('.cover').toggleClass('open')
    })

    // 弹窗函数
    const popup = ({content,type,popupWidth}) => {
        const $cover = $('.popup-cover')
        const $dom = $('.popup')
        const width = popupWidth ? popupWidth : 430
        if (type === 'red') {
            $dom.addClass('red')
        } else {
            $dom.removeClass('red')
        }
        $dom.find('.popup-content').html(content)
        $dom.css('width', width + 'px')
        $dom.show()
        $cover.addClass('open')

        $dom.find('.close').one('click', () => {
            $dom.hide()
            $cover.removeClass('open')
        })
    }

    const popup_pig = (type) => {
        const $cover = $('.popup-cover')
        const $dom = $('.popup-pig')
        if (type === 'red') {
            $dom.addClass('red')
        } else {
            $dom.removeClass('red')
        }
        $dom.show()
        $cover.addClass('open')

        $dom.find('.close').one('click', () => {
            $dom.hide()
            $cover.removeClass('open')
        })
    }

    win.popup = popup
    win.popup_pig = popup_pig

})(jQuery, window)





