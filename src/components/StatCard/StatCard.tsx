import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box, Divider, Typography } from '@material-ui/core';
import { getAbilityScoreModifierString } from '../../common/getAbilityScoreModifier';
import { getXPFromChallenge } from '../../common/getXPFromChallenge';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  statsCard: {
    marginTop: 15,
    width: '80%',
  },
  abilityScoreCard: {
    width: '20%',
  }
}));

const data = [{
  "slug": "aatxe",
  "name": "Aatxe",
  "size": "Large",
  "type": "celestial",
  "subtype": "shapechanger",
  "group": null,
  "alignment": "lawful good",
  "armor_class": 14,
  "armor_desc": "natural armor",
  "hit_points": 105,
  "hit_dice": "10d10+50",
  "speed": {
      "walk": 50
  },
  "strength": 22,
  "dexterity": 12,
  "constitution": 20,
  "intelligence": 10,
  "wisdom": 14,
  "charisma": 14,
  "strength_save": null,
  "dexterity_save": null,
  "constitution_save": null,
  "intelligence_save": null,
  "wisdom_save": null,
  "charisma_save": null,
  "perception": null,
  "skills": {
      "athletics": 9,
      "intimidation": 5
  },
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "charmed, frightened",
  "senses": "passive Perception 12",
  "languages": "understands all but can't speak",
  "challenge_rating": "5",
  "actions": [
      {
          "attack_bonus": 9,
          "damage_dice": "3d8+6",
          "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
          "name": "Gore"
      },
      {
          "desc": "The aatxe lowers its horns and paws at the ground with its hooves. Each creature within 30 feet of the aatxe must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the aatxe's Paw the Earth for the next 24 hours.",
          "name": "Paw the Earth"
      }
  ],
  "reactions": "",
  "legendary_desc": "The aatxe can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aatxe regains spent legendary actions at the start of its turn.",
  "legendary_actions": [
      {
          "desc": "The aatxe makes a Wisdom (Perception) check.",
          "name": "Detect"
      },
      {
          "desc": "The aatxe makes one gore attack.",
          "name": "Gore (Costs 2 Actions)"
      },
      {
          "desc": "The aatxe flares crimson with celestial power, protecting those nearby. The next attack that would hit an ally within 5 feet of the aatxe hits the aatxe instead.",
          "name": "Bulwark (Costs 3 Actions)"
      }
  ],
  "special_abilities": [
      {
          "desc": "If the aatxe moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
          "name": "Charge"
      },
      {
          "desc": "The aatxe can use an action to read the surface thoughts of one creature within 30 feet. This works like the detect thoughts spell, except it can only read surface thoughts and there is no limit to the duration. It can end this effect as a bonus action or by using an action to change the target. Limited Speech (Humanoid Form Only). The aatxe can verbally communicate only simple ideas and phrases, though it can understand and follow a conversation without issue.",
          "name": "Know Thoughts"
      },
      {
          "desc": "The aatxe has advantage on saving throws against spells and other magical effects.",
          "name": "Magic Resistance"
      },
      {
          "desc": "The aatxe can use its action to polymorph into a Medium male humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
          "name": "Shapechanger"
      }
  ],
  "spell_list": [],
  "img_main": null,
  "document__slug": "cc",
  "document__title": "Creature Codex OGL",
  "document__license_url": "http://open5e.com/legal"
}];

const aboleth = [{
  "slug": "aboleth",
  "name": "Aboleth",
  "size": "Large",
  "type": "aberration",
  "subtype": "",
  "group": null,
  "alignment": "lawful evil",
  "armor_class": 17,
  "armor_desc": "natural armor",
  "hit_points": 135,
  "hit_dice": "18d10+36",
  "speed": {
      "walk": 10,
      "swim": 40
  },
  "strength": 21,
  "dexterity": 9,
  "constitution": 15,
  "intelligence": 18,
  "wisdom": 15,
  "charisma": 18,
  "strength_save": null,
  "dexterity_save": null,
  "constitution_save": 6,
  "intelligence_save": 8,
  "wisdom_save": 6,
  "charisma_save": null,
  "perception": 10,
  "skills": {
      "history": 12,
      "perception": 10
  },
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "darkvision 120 ft., passive Perception 20",
  "languages": "Deep Speech, telepathy 120 ft.",
  "challenge_rating": "10",
  "actions": [
      {
          "name": "Multiattack",
          "desc": "The aboleth makes three tentacle attacks."
      },
      {
          "name": "Tentacle",
          "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
          "attack_bonus": 9,
          "damage_dice": "2d6",
          "damage_bonus": 5
      },
      {
          "name": "Tail",
          "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
          "attack_bonus": 9,
          "damage_dice": "3d6",
          "damage_bonus": 5
      },
      {
          "name": "Enslave (3/day)",
          "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
      }
  ],
  "reactions": "",
  "legendary_desc": "The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn.",
  "legendary_actions": [
      {
          "name": "Detect",
          "desc": "The aboleth makes a Wisdom (Perception) check."
      },
      {
          "name": "Tail Swipe",
          "desc": "The aboleth makes one tail attack."
      },
      {
          "name": "Psychic Drain (Costs 2 Actions)",
          "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
      }
  ],
  "special_abilities": [
      {
          "name": "Amphibious",
          "desc": "The aboleth can breathe air and water."
      },
      {
          "name": "Mucous Cloud",
          "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
      },
      {
          "name": "Probing Telepathy",
          "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
      }
  ],
  "spell_list": [],
  "img_main": "http://api.open5e.com/static/img/monsters/aboleth.png",
  "document__slug": "wotc-srd",
  "document__title": "Systems Reference Document",
  "document__license_url": "http://open5e.com/legal"
}]

const getSavingThrow = (savingThrow: number | null, abilityScore: number ) => {
  if (!!savingThrow) {
    if (savingThrow > 0) {
      return `+`+savingThrow
    }
    else {
      return savingThrow.toString();
    }
  }
  return getAbilityScoreModifierString(abilityScore);
}

interface MonsterActionInterface {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage_dice?: string;
  damage_bonus?: number;
}

export interface MonsterStats  {
  slug: string;
  name: string;
  size: string;
  type: string;
  subtype?: string;
  group?: string;
  alignment?: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: {
      walk?: number;
      swim?: number;
      climb?: number;
  }
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
  perception: number;
  skills?: {
      history: number;
      perception: number;
  },
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  actions: MonsterActionInterface[];
  reactions: string;
  legendary_desc: string;
  legendary_actions: MonsterActionInterface[];
  special_abilities: MonsterActionInterface[];
  spell_list: [];
  img_main: string;
  document__slug: string;
  document__title: string;
  document__license_url: string;
};

export interface MonsterStats  {
  slug: string;
  name: string;
  size: string;
}

export const ExampleCard: React.FC<MonsterStats> = (props) => {
  return (<h1>ExampleCard - {props['slug']}</h1>);
}

export const StatCard: React.FC<MonsterStats> = (props) => {
  const classes = useStyles();

  // const item = aboleth[0];
  const item = props;

  console.log('test - ', props, item, item['name']);

  return (
    <div className={classes.root} style={{display:'flex', justifyContent: 'center'}}>
      { item &&
        <Card className={classes.statsCard}>
          <h1>{item['name']}</h1>
          <Typography variant="subtitle1" gutterBottom>{item['size']} {item['type']}, {item['alignment']}</Typography>
            <Box display="flex" justifyContent="center">
            <div>
              <p>Armor Class: {item['armor_class']}</p>
              <p>Hit Points: {item['hit_points']} ({item['hit_dice']})</p>
              {/* TODO: Deal w/ swimming */}
              {/* <p>Speed: Walk ({item['speed']['walk']}ft)</p> */}
            </div>
            {!!item['img_main'] && (
            <div>
              <img 
                src={item['img_main'] || undefined}
                alt={'img-'+item['slug']}
                style={{height: 130, marginLeft: 20}}
              />
            </div>)}
          </Box>
          <Box display="flex" flexDirection="row">
              <Card className={classes.abilityScoreCard}>
                <p>STR</p>
                <p>{item['strength']} ({getAbilityScoreModifierString(item['strength'])})</p>
              </Card>
              <Card className={classes.abilityScoreCard}>
                <p>DEX</p>
                <p>{item['dexterity']} ({getAbilityScoreModifierString(item['dexterity'])})</p>
              </Card>
              <Card className={classes.abilityScoreCard}>
                <p>CON</p>
                <p>{item['constitution']} ({getAbilityScoreModifierString(item['constitution'])})</p>
              </Card>
              <Card className={classes.abilityScoreCard}>
                <p>INT</p>
                <p>{item['intelligence']} ({getAbilityScoreModifierString(item['intelligence'])})</p>
              </Card>
              <Card className={classes.abilityScoreCard}>
                <p>WIS</p>
                <p>{item['wisdom']} ({getAbilityScoreModifierString(item['wisdom'])})</p>
              </Card>
              <Card className={classes.abilityScoreCard}>
                <p>CHA</p>
                <p>{item['charisma']} ({getAbilityScoreModifierString(item['charisma'])})</p>
              </Card>
          </Box>
          <Box>
            <div>
              <p><span>Saving Throws: </span>
                Str{getSavingThrow(item['strength_save'], item['strength'])}, 
                Dex{getSavingThrow(item['dexterity_save'], item['dexterity'])},
                Con{getSavingThrow(item['constitution_save'], item['constitution'])}, 
                Int{getSavingThrow(item['intelligence_save'], item['intelligence'])}, 
                Wis{getSavingThrow(item['wisdom_save'], item['wisdom'])}, 
                Cha{getSavingThrow(item['charisma_save'], item['charisma'])}, 
              </p>
              <Box>
                <p><span>Skills: </span>
                {/* { Object.entries(item['skills']).map((skill) => {
                  return (` `+skill[0]+` `+skill[1]+` `);
                })
                } */}
                </p>
              </Box>
              <p><span>Senses: </span>{item['senses']}</p>
              <p><span>Languages: </span>{item['languages']}</p>
              <p><span>Challenge: </span>{item['challenge_rating']}{getXPFromChallenge(item['challenge_rating'])}</p>
            </div>
          </Box>
          <Divider/>
          {/* TODO: check if special abilities are null */}
          <Box>
            <h3>Special Abilities</h3>
            {/* { item['special_abilities'].map((ability => (
                <p><span>{ability['name']}:</span> {ability['desc']}</p>
              )))
            } */}
          </Box>
        </Card>
      }
    </div>
  );
};

