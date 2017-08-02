/**
 * Created by zaze on 2017/6/11.
 */

// 定义向量
function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    }
}

// 向量积
function vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y
}

// 判断点P 是否在点abc构成的三角形内
function isPointInTriangle(p, a, b, c) {
    var pa = vector(p, a);
    var pb = vector(p, b);
    var pc = vector(p, c);

    var t1 = vectorProduct(pa, pb);
    var t2 = vectorProduct(pb, pc);
    var t3 = vectorProduct(pc, pa);
    return sameSign(t1, t2) && sameSign(t2, t3)
}

// 判断符号是否相同 高位表示正负，异或操作仅当高位不同时为1，即负
function sameSign(a, b) {
    return (a ^ b) >= 0;
}

function needDelay(elem, leftCorner, currMousePos) {
    var offset = elem.offset();
    var topLeft = {
        x: offset.left,
        y: offset.top
    };
    var bottomLeft = {
        x: offset.left,
        y: offset.top + elem.height()
    };

    return isPointInTriangle(currMousePos, leftCorner, topLeft, bottomLeft);
}
