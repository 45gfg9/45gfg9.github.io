function ajax_create_request() {
    var req = Object();
    req.obj = new XMLHttpRequest();
    
    return req;
}

function ajax_request(url, data) {
    var request = ajax_create_request();

    request.obj.open('POST', url);
    request.obj.send(data);

    return new ajax_response(request);
}

function ajax_response(request) {
    this.request = request.obj;
    this.error = null;
    this.value = null;
    this.context = request.context;
    
    if(request.obj.status == 200) {
        try {
            this.value = object_from_json(request);
            
            if(this.value && this.value.error) {
                this.error = this.value.error;
                this.value = null;
            }
        }
        catch(e) {
            this.error = new ajax_error(e.name, e.description, e.number);
        }
    }
    else {
        this.error = new ajax_error('HTTP request failed with status: ' + request.obj.status, request.obj.status);
    }
    
    return this;
}

function ajax_error(name, description, number) {
    this.name = name;
    this.description = description;
    this.number = number;

    return this;
}

function object_from_json(request) {
    if(Boolean(request.obj.responseXML) || Boolean(request.obj.responseXML.xml))
        return request.obj.responseXML;

    return request.obj.responseText;
}

ajax_request(
    '/jiating/ajax/FamilyEduCenter.EscapeSkill.SeeVideo,FamilyEduCenter.ashx?_method=TemplateIn2&_session=rw',
      'workid=222682'
    + '\r\nfid=226'
    + '\r\ntitle=对校园欺凌说“不”'
    + '\r\nrequire='
    + '\r\npurpose='
    + '\r\ncontents='
    + '\r\ntestwanser=0|0|0'
    + '\r\ntestinfo=已掌握技能'
    + '\r\ntestMark=100'
    + '\r\ntestReulst=1'
    + '\r\nSiteName='
    + '\r\nsiteAddrees='
    + '\r\nwatchTime='
    + '\r\nCourseID=843'
);

ajax_request(
    '/jiating/ajax/FamilyEduCenter.EscapeSkill.SeeVideo,FamilyEduCenter.ashx?_method=TemplateIn2&_session=rw',
      'workid=214191'
    + '\r\nfid=209'
    + '\r\ntitle=宿舍是我家  安全靠大家'
    + '\r\nrequire='
    + '\r\npurpose='
    + '\r\ncontents='
    + '\r\ntestwanser=0|0|0'
    + '\r\ntestinfo=已掌握技能'
    + '\r\ntestMark=100'
    + '\r\ntestReulst=1'
    + '\r\nSiteName='
    + '\r\nsiteAddrees='
    + '\r\nwatchTime='
    + '\r\nCourseID=842'
);

ajax_request(
    '/jiating/ajax/FamilyEduCenter.EscapeSkill.SeeVideo,FamilyEduCenter.ashx?_method=TemplateIn2&_session=rw',
      'workid=225694'
    + '\r\nfid=250'
    + '\r\ntitle=走过花季.雨季'
    + '\r\nrequire='
    + '\r\npurpose='
    + '\r\ncontents='
    + '\r\ntestwanser=0|0|0'
    + '\r\ntestinfo=已掌握技能'
    + '\r\ntestMark=100'
    + '\r\ntestReulst=1'
    + '\r\nSiteName='
    + '\r\nsiteAddrees='
    + '\r\nwatchTime='
    + '\r\nCourseID=849'
);

ajax_request(
    '/jiating/ajax/FamilyEduCenter.EscapeSkill.SeeVideo,FamilyEduCenter.ashx?_method=TemplateIn2&_session=rw',
      'workid=226389'
    + '\r\nfid=254'
    + '\r\ntitle=实验课安全须知'
    + '\r\nrequire='
    + '\r\npurpose='
    + '\r\ncontents='
    + '\r\ntestwanser=0|0|0'
    + '\r\ntestinfo=已掌握技能'
    + '\r\ntestMark=100'
    + '\r\ntestReulst=1'
    + '\r\nSiteName='
    + '\r\nsiteAddrees='
    + '\r\nwatchTime='
    + '\r\nCourseID=850'
);

$.ajax({
    type: 'POST',
    url: '//huodongapi.xueanquan.com/p/ningxia/Topic/topic/platformapi/api/v1/records/sign',
    dataType: 'json',
    data: {
        "specialId": 369,
        "step": 1
    },
    xhrFields: {
        withCredentials: true
    },
    success: function(resp) {
        if (!resp.result) {
            ShowMsg(resp.msg);
        }
    }
});

