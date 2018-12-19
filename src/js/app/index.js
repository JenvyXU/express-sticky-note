require('less/index.less')
var NoteManager=require('mod/note-manager.js').NoteManager
var Event=require('mod/event.js')
var WaterFall=require('mod/waterfall.js')
var addNote=require('mod/addNote.js').addNote
var Note=require('../mod/note.js').Note
NoteManager.load()
addNote()
Event.on('waterfall',function(){
    WaterFall.init($('#content'))
})