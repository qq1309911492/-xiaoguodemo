import http from './axios'

export function getadd(data) {
    return http.post('/api/menuadd', data)
}
export function setadd(params) {
    return http.get('/api/menulist', {
        params
    })
}
export function onelist(params) {
    return http.get('/api/menuinfo', {
        params
    })
}
export function edit(data) {
    return http.post('/api/menuedit', data)
}

export function del(data) {
    return http.post('/api/menudelete', data)
}





//角色添加

export function JSadd(data) {
    return http.post('/api/roleadd', data)
}

//角色列表
export function JSlist(params) {
    return http.get('/api/rolelist', {
        params
    })
}
//3.角色获取（一条）
export function JSonelist(params) {
    return http.get('/api/roleinfo', {
        params
    })
}
//角色修改
export function JSedit(data) {
    return http.post('/api/roleedit', data)
}
//角色删除
export function JSdelet(data) {
    return http.post('/api/roledelete', data)
}





//管理员添加
export function GLYadd(data) {
    return http.post('/api/useradd', data)
}
//管理员总数

export function GLYcount(params) {
    return http.get('/api/usercount', {
        params
    })
}

//管理员列表（分页）
export function GLYlist(params) {
    return http.get('/api/userlist', {
        params
    })
}

//管理员获取（一条）
export function GLYonelist(params) {
    return http.get('/api/userinfo', {
        params
    })
}

//管理员修改
export function GLYreadit(data) {
    return http.post('/api/useredit', data)
}

//管理员删除
export function GLYdelet(data) {
    return http.post('/api/userdelete', data)
}

//管理员登录
export function GLYdlogin(data) {
    return http.post('/api/userlogin', data)
}


//四、商品分类管理


//商品分类添加
export function SPFLadd(data) {
    return http.post('/api/cateadd', data)
}

//商品分类列表
export function SPFLlist(params) {
    return http.get('/api/catelist', {
        params
    })
}

//商品分类获取（一条）
export function SPFoneLlist(params) {
    return http.get('/api/cateinfo', {
        params
    })
}

//商品分类修改
export function SPFLedit(data) {
    return http.post('/api/cateedit', data)
}

//商品分类删除
export function SPFLdelet(data) {
    return http.post('/api/catedelete', data)
}

//五、商品规格管理


//商品规格添加
export function SPGGadd(data) {
    return http.post('/api/specsadd', data)
}

//商品规格总数（用于计算分页）
export function SPGGcount(params) {
    return http.get('/api/specscount', {
        params
    })
}
//商品规格列表（分页）
export function SPGGlist(params) {
    return http.get('/api/specslist', {
        params
    })
}

//商品规格获取（一条）
export function SPGGonelist(params) {
    return http.get('/api/specsinfo', {
        params
    })
}
//商品规格修改
export function SPGGedit(data) {
    return http.post('/api/specsedit', data)
}
//商品规格删除
export function SPGGdelet(data) {
    return http.post('/api/specsdelete', data)
}


//六、商品管理

//商品添加
export function SPGLadd(data) {
    return http.post('/api/goodsadd', data)
}
//商品总数（用于计算分页）
export function SPGLcount(params) {
    return http.get('/api/goodscount', {
        params
    })
}
//商品列表（分页）
export function SPGLlist(params) {
    return http.get('/api/goodslist', {
        params
    })
}
//商品获取（一条）
export function SPGLonelist(params) {
    return http.get('/api/goodsinfo', {
        params
    })
}
//商品修改
export function SPGLedit(data) {
    return http.post('/api/goodsedit', data)
}
//商品删除
export function SPGLdelet(data) {
    return http.post('/api/goodsdelete', data)
}


//七、会员管理

//会员列表
export function HYlist(params) {
    return http.get('/api/memberlist', {
        params
    })
}
//会员获取（一条）
export function HYonelist(params) {
    return http.get('/api/memberinfo', {
        params
    })
}
//会员修改
export function HYdeit(data) {
    return http.post('/api/memberedit', data)
}

//八、轮播图管理

//轮播图添加
export function LBTadd(data) {
    return http.post('/api/banneradd', data)
}
//轮播图列表
export function LBTlist(params) {
    return http.get('/api/bannerlist', { params })
}
//轮播图获取（一条）

export function LBTonelist(params) {
    return http.get('/api/bannerinfo', { params })
}
//轮播图修改
export function LBTedit(data) {
    return http.post('/api/banneredit', data)
}
//轮播图删除
export function LBTdelet(data) {
    return http.post('/api/bannerdelete', data)
}


//九、限时秒杀管理

//限时秒杀添加
export function MSadd(data) {
    return http.post('/api/seckadd', data)
}


//限时秒杀列表
export function MSlist(params) {
    return http.get('/api/secklist', { params })
}
//限时秒杀获取（一条）
export function MSonelist(params) {
    return http.get('/api/seckinfo', { params })
}
//限时秒杀修改
export function MSedit(data) {
    return http.post('/api/seckedit', data)
}
//限时秒杀删除
export function MSdelet(data) {
    return http.post('/api/seckdelete', data)
}







