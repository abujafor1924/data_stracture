function bestFriend(friends) {
  var friend = friends[0].length;
  var bignameFriend = friends[0];
  for (var i = 1; i < friends.length; i++) {
    var maxi = friends[i].length;
    if (maxi > friend) {
      bignameFriend = friends[i];
      friend = maxi;
    }
  }
  return bignameFriend;
}
const friends = ["sofiq", "mahbub", "robiul", "haider", "habibhossyn"];
let bestFriendUs = bestFriend(friends);
console.log(bestFriendUs);
