$(document).ready(function() {
  // var tabs = ['Headings', 'Text', 'Lists', 'Links', 'Images', 'Tables'];
  var tabs = [
    {tabName: 'Headers', tabId: '#headings'},
    {tabName: 'Text', tabId: '#text'},
    {tabName: 'Lists', tabId: '#lists'},
    {tabName: 'Links', tabId: '#links'},
    {tabName: 'Images', tabId: '#images'},
    {tabName: 'Tables', tabId: '#tables'},
  ];
  for (var i = 0; i < tabs.length; i++) {
    var tabHtml = '<li><a href="' + tabs[i].tabId + '">' + tabs[i].tabName + '</a></li>';
    $('#vertical-navbar').append(tabHtml);
  }
});
