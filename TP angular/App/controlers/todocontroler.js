angular.module('todo').controller("TodoController", function(){
					
					var todoCtrl = this;

					todoCtrl.src = "http://www.google.fr/url?source=imglanding&ct=img&q=http://santegantonbudokai.unblog.fr/files/2009/06/kendo.jpg&sa=X&ved=0CAkQ8wdqFQoTCIOb36eelMYCFQa8cgodXcwAOA&usg=AFQjCNHU06ZFfL6mRkZqkRsHp6JaKgs8_w"

					todoCtrl.tasks = ["un","deux","trois","quatre","cinq","six"];

					todoCtrl.addTasks = function (desc) {
						todoCtrl.tasks.push(desc)
					}

					todoCtrl.isred = "red"

					todoCtrl.reverse = true;
				

					todoCtrl.affichemoi = true;

					todoCtrl.user1 = { name : "titi", email: "azdsdf@dfkgl.com"}
					todoCtrl.user2 = { email: "user2@dfkgl.com"}
					todoCtrl.user3 = { name : "john doe", email: "azdsdf@dfkgl.com"}
				})