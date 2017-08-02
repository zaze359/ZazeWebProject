/**
 * Created by zaze on 2017/6/7.
 */

$(document).ready(function () {
    var sub = $('#sub');

    var activeRow;
    var activeMenu;
    //
    var mouseInSub = false;
    sub.on('mouseenter', function (e) {
        mouseInSub = true
    }).on('mouseleave', function (e) {
        mouseInSub = false
    });

    //
    var mouseTrack = [];
    var moveHandler = function (e) {
        mouseTrack.push({
            x: e.pageX,
            y: e.pageY
        });

        if (mouseTrack.length > 3) {
            mouseTrack.shift()
        }
    };

    //
    function resetMenu(e) {
        if (activeRow) {
            activeRow.removeClass('active');
        }
        // 给新选择的行添加效果
        activeRow = $(e.target).addClass('active');
        if (activeMenu) {
            activeMenu.addClass('none');
        }
        // 根据 id 显示子栏目对应内容
        activeMenu = $('#' + activeRow.data('id'));
        activeMenu.removeClass('none');
    }

    //
    var timer;
    $('#test')
        .on('mouseenter', function (e) {
            // 鼠标进入时显示子栏目
            sub.removeClass('none');
            $(document).bind('mousemove', moveHandler);

        })
        .on('mouseleave', function (e) {
            // 出去时鼠标隐藏子栏目
            sub.addClass('none');
            // 移除之前选择栏的状态
            if (activeRow) {
                activeRow.removeClass('active');
                activeRow = null;
            }
            // 隐藏menu
            if (activeMenu) {
                activeMenu.addClass('none');
                activeMenu = null;
            }
            $(document).unbind('mousemove', moveHandler);

        })
        // 所有子元素 li 的 mouseenter 都冒泡到 父元素操作
        .on('mouseenter', 'li', function (e) {
            if (!activeRow) {
                resetMenu(e);
                return
            }
            if (timer) {
                // 清除上一个未执行的计时器
                clearTimeout(timer);
            }
            var currMousePos = mouseTrack[mouseTrack.length - 1];
            var leftCorner = mouseTrack[mouseTrack.length - 2];

            var delay = needDelay(sub, leftCorner, currMousePos);
            if (delay) {
                timer = setTimeout(function () {
                    if (mouseInSub) {
                        return
                    }
                    resetMenu(e);
                    timer = null
                }, 300);
            } else {
                resetMenu(e);
            }
        });


});
