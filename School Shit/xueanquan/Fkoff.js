function ajax_request(url, data)
{
    var request = ajax_create_request(context);

    request.obj.open('POST', url, async);
    request.obj.send(data);
    
    return ajax_response(request);
}

function ajax_create_request(context) {
    var req = Object();
    req.obj = new XMLHttpRequest();
    req.context = context;

    return req;
}

function ajax_response(request) {
    this.value = null;
    
    if(request.obj.status == 200) {
        this.value = object_from_json(request);
        console.log('OK');
    else {
        console.error('HTTP request failed with status: ' + request.obj.status);
    }
    return this.value;
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
