// TODO: Update list for over CR 20

export const getXPFromChallenge = (challengeLvl: string) => {
  switch(challengeLvl) {
    case '0':
      return '(0 or 10 XP)';
    case '1/8':
      return '(25 XP)';
    case '1/4':
      return '(50 XP)';
    case '1/2':
      return '(100 XP)';
    case '1':
      return '(200 XP)';
    case '2':
      return '(450 XP)';
    case '3':
      return '(700 XP)';
    case '4':
      return '(1,100 XP)';
    case '5':
      return '(1,800 XP)';
    case '6':
      return '(2,300 XP)';
    case '7':
      return '(2,900 XP)';
    case '8': 
      return '(3,900 XP)';
    case '9':
      return '(5,000 XP)';
    case '10':
      return '(5,900 XP)';
    case '11':
      return '(7,200 XP)';
    case '12':
      return '(8,400 XP)';
    case '13':
      return '(10,000 XP)';
    case '14':
      return '(11,500 XP)';
    case '15':
      return '(13,000 XP)';
    case '16':
      return '(15,000 XP)';
    case '17':
      return '(18,000 XP)';
    case '18':
      return '(20,000 XP)';
    case '19':
      return '(22,000 XP)';
    case '20':
      return '(25,000 XP)';
    default:
      return '(Over 25,000 XP - consult MM)';
  }
}
