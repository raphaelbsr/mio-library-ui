import React, { useState } from 'react';

import {
  // ActionDialog
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField,
  // formatarTelefone
  // NumeroInscricaoTextField
  // PasswordTextField
  // PageHeader
  // CurrencyTextField
  // ContentDivider
  Button,
  Finder,
  DataTable
} from 'mio-library-ui';

import { Box, makeStyles } from '@material-ui/core';

const fakeData = [
  {
    id: 1,
    first_name: 'Dino',
    last_name: 'MacGiffin',
    email: 'dmacgiffin0@360.cn',
    gender: 'Genderfluid',
    birth: '11.10.2020',
    ip_address: '186.56.223.228',
    amount: '$29818.50'
  },
  {
    id: 2,
    first_name: 'Malena',
    last_name: 'Sloper',
    email: 'msloper1@rakuten.co.jp',
    gender: 'Agender',
    birth: '10.08.2020',
    ip_address: '67.133.156.207',
    amount: '$80744.17'
  },
  {
    id: 3,
    first_name: 'Curran',
    last_name: 'Keogh',
    email: 'ckeogh2@census.gov',
    gender: 'Polygender',
    birth: '17.06.2021',
    ip_address: '54.134.129.209',
    amount: '$89740.70'
  },
  {
    id: 4,
    first_name: 'Rusty',
    last_name: 'Blundel',
    email: 'rblundel3@cnn.com',
    gender: 'Polygender',
    birth: '20.12.2020',
    ip_address: '203.166.243.96',
    amount: '$45224.75'
  },
  {
    id: 5,
    first_name: 'Tammie',
    last_name: 'Howsam',
    email: 'thowsam4@hugedomains.com',
    gender: 'Non-binary',
    birth: '11.06.2021',
    ip_address: '50.178.248.247',
    amount: '$845.62'
  },
  {
    id: 6,
    first_name: 'Alfredo',
    last_name: 'Crews',
    email: 'acrews5@creativecommons.org',
    gender: 'Agender',
    birth: '25.09.2020',
    ip_address: '233.120.122.120',
    amount: '$13133.00'
  },
  {
    id: 7,
    first_name: 'Georgeta',
    last_name: 'Jahnke',
    email: 'gjahnke6@state.tx.us',
    gender: 'Bigender',
    birth: '21.08.2020',
    ip_address: '105.121.9.230',
    amount: '$4136.77'
  },
  {
    id: 8,
    first_name: 'Mozes',
    last_name: 'Dedman',
    email: 'mdedman7@studiopress.com',
    gender: 'Polygender',
    birth: '04.12.2020',
    ip_address: '84.153.1.37',
    amount: '$32936.66'
  },
  {
    id: 9,
    first_name: 'Lesya',
    last_name: 'Schubuser',
    email: 'lschubuser8@eventbrite.com',
    gender: 'Female',
    birth: '01.11.2020',
    ip_address: '61.10.210.1',
    amount: '$23840.00'
  },
  {
    id: 10,
    first_name: 'Enrico',
    last_name: 'Saterweyte',
    email: 'esaterweyte9@php.net',
    gender: 'Non-binary',
    birth: '23.08.2020',
    ip_address: '232.115.255.151',
    amount: '$63687.56'
  },
  {
    id: 11,
    first_name: 'Roseann',
    last_name: 'Manneville',
    email: 'rmannevillea@themeforest.net',
    gender: 'Female',
    birth: '23.12.2020',
    ip_address: '97.34.204.95',
    amount: '$25877.15'
  },
  {
    id: 12,
    first_name: 'Damien',
    last_name: 'Nabbs',
    email: 'dnabbsb@columbia.edu',
    gender: 'Agender',
    birth: '29.11.2020',
    ip_address: '207.158.78.208',
    amount: '$35179.56'
  },
  {
    id: 13,
    first_name: 'Torey',
    last_name: 'Palser',
    email: 'tpalserc@japanpost.jp',
    gender: 'Female',
    birth: '01.05.2021',
    ip_address: '215.40.117.203',
    amount: '$10206.56'
  },
  {
    id: 14,
    first_name: 'Estelle',
    last_name: 'Tomblings',
    email: 'etomblingsd@aol.com',
    gender: 'Non-binary',
    birth: '22.07.2020',
    ip_address: '182.67.164.44',
    amount: '$87618.26'
  },
  {
    id: 15,
    first_name: 'Derick',
    last_name: 'Pymm',
    email: 'dpymme@fema.gov',
    gender: 'Genderfluid',
    birth: '06.07.2021',
    ip_address: '16.222.177.166',
    amount: '$3530.98'
  },
  {
    id: 16,
    first_name: 'Connie',
    last_name: 'Coltan',
    email: 'ccoltanf@berkeley.edu',
    gender: 'Polygender',
    birth: '06.11.2020',
    ip_address: '4.109.247.167',
    amount: '$76110.28'
  },
  {
    id: 17,
    first_name: 'Corette',
    last_name: 'Heibl',
    email: 'cheiblg@prweb.com',
    gender: 'Agender',
    birth: '20.02.2021',
    ip_address: '14.64.67.150',
    amount: '$68512.36'
  },
  {
    id: 18,
    first_name: 'Amye',
    last_name: 'Sneaker',
    email: 'asneakerh@ihg.com',
    gender: 'Non-binary',
    birth: '05.03.2021',
    ip_address: '171.9.74.102',
    amount: '$59982.24'
  },
  {
    id: 19,
    first_name: 'Colet',
    last_name: 'Genery',
    email: 'cgeneryi@angelfire.com',
    gender: 'Agender',
    birth: '11.07.2021',
    ip_address: '174.52.206.198',
    amount: '$87506.83'
  },
  {
    id: 20,
    first_name: 'Niel',
    last_name: 'Dockrill',
    email: 'ndockrillj@wired.com',
    gender: 'Male',
    birth: '03.11.2020',
    ip_address: '101.196.246.62',
    amount: '$64658.98'
  },
  {
    id: 21,
    first_name: 'Brier',
    last_name: 'Craghead',
    email: 'bcragheadk@gnu.org',
    gender: 'Non-binary',
    birth: '01.12.2020',
    ip_address: '255.209.179.244',
    amount: '$97263.48'
  },
  {
    id: 22,
    first_name: 'Janis',
    last_name: 'Bengal',
    email: 'jbengall@cbsnews.com',
    gender: 'Genderqueer',
    birth: '21.10.2020',
    ip_address: '153.132.139.228',
    amount: '$70660.56'
  },
  {
    id: 23,
    first_name: 'Mata',
    last_name: 'Crayton',
    email: 'mcraytonm@icq.com',
    gender: 'Female',
    birth: '29.07.2020',
    ip_address: '60.222.8.215',
    amount: '$17147.34'
  },
  {
    id: 24,
    first_name: 'Amata',
    last_name: 'Bahike',
    email: 'abahiken@goodreads.com',
    gender: 'Bigender',
    birth: '17.10.2020',
    ip_address: '118.70.45.80',
    amount: '$52649.49'
  },
  {
    id: 25,
    first_name: 'Lela',
    last_name: 'Beinke',
    email: 'lbeinkeo@wunderground.com',
    gender: 'Polygender',
    birth: '12.10.2020',
    ip_address: '66.201.107.59',
    amount: '$1755.50'
  },
  {
    id: 26,
    first_name: 'Leshia',
    last_name: 'Blackah',
    email: 'lblackahp@bloglovin.com',
    gender: 'Bigender',
    birth: '28.09.2020',
    ip_address: '87.246.251.135',
    amount: '$39539.95'
  },
  {
    id: 27,
    first_name: 'Sorcha',
    last_name: 'Perett',
    email: 'sperettq@weibo.com',
    gender: 'Non-binary',
    birth: '19.09.2020',
    ip_address: '104.204.58.224',
    amount: '$74778.77'
  },
  {
    id: 28,
    first_name: 'Esteban',
    last_name: 'Taill',
    email: 'etaillr@flavors.me',
    gender: 'Genderfluid',
    birth: '01.02.2021',
    ip_address: '21.203.6.247',
    amount: '$90102.07'
  },
  {
    id: 29,
    first_name: 'Adham',
    last_name: 'Burtwhistle',
    email: 'aburtwhistles@storify.com',
    gender: 'Bigender',
    birth: '07.12.2020',
    ip_address: '113.110.11.189',
    amount: '$29824.18'
  },
  {
    id: 30,
    first_name: 'Bald',
    last_name: 'Merrell',
    email: 'bmerrellt@seattletimes.com',
    gender: 'Non-binary',
    birth: '30.03.2021',
    ip_address: '234.117.110.169',
    amount: '$27101.37'
  },
  {
    id: 31,
    first_name: 'Kayla',
    last_name: 'Keave',
    email: 'kkeaveu@meetup.com',
    gender: 'Genderfluid',
    birth: '12.07.2020',
    ip_address: '173.143.157.171',
    amount: '$67364.40'
  },
  {
    id: 32,
    first_name: 'Ralph',
    last_name: 'Schuster',
    email: 'rschusterv@blog.com',
    gender: 'Male',
    birth: '25.11.2020',
    ip_address: '172.164.222.29',
    amount: '$41526.10'
  },
  {
    id: 33,
    first_name: 'Derrick',
    last_name: 'Padbery',
    email: 'dpadberyw@sourceforge.net',
    gender: 'Female',
    birth: '13.12.2020',
    ip_address: '165.246.112.197',
    amount: '$7653.53'
  },
  {
    id: 34,
    first_name: 'Doris',
    last_name: 'Skipsey',
    email: 'dskipseyx@jalbum.net',
    gender: 'Male',
    birth: '18.08.2020',
    ip_address: '179.81.169.185',
    amount: '$46919.44'
  },
  {
    id: 35,
    first_name: 'Mickey',
    last_name: 'Dows',
    email: 'mdowsy@nyu.edu',
    gender: 'Genderfluid',
    birth: '12.12.2020',
    ip_address: '208.12.17.197',
    amount: '$51728.23'
  },
  {
    id: 36,
    first_name: 'Cris',
    last_name: 'Eustanch',
    email: 'ceustanchz@t.co',
    gender: 'Agender',
    birth: '12.12.2020',
    ip_address: '162.158.160.58',
    amount: '$47929.46'
  },
  {
    id: 37,
    first_name: 'Renato',
    last_name: 'Conquer',
    email: 'rconquer10@imageshack.us',
    gender: 'Genderqueer',
    birth: '01.05.2021',
    ip_address: '62.67.83.158',
    amount: '$20499.37'
  },
  {
    id: 38,
    first_name: 'Vinni',
    last_name: 'Caps',
    email: 'vcaps11@aol.com',
    gender: 'Genderqueer',
    birth: '16.06.2021',
    ip_address: '77.148.133.224',
    amount: '$18721.60'
  },
  {
    id: 39,
    first_name: 'Dorothy',
    last_name: 'Putterill',
    email: 'dputterill12@etsy.com',
    gender: 'Agender',
    birth: '01.06.2021',
    ip_address: '170.71.31.121',
    amount: '$84952.00'
  },
  {
    id: 40,
    first_name: 'Nissa',
    last_name: 'Wilstead',
    email: 'nwilstead13@com.com',
    gender: 'Bigender',
    birth: '25.04.2021',
    ip_address: '144.69.173.160',
    amount: '$50046.16'
  },
  {
    id: 41,
    first_name: 'Bailey',
    last_name: 'Hugill',
    email: 'bhugill14@amazon.co.uk',
    gender: 'Female',
    birth: '07.01.2021',
    ip_address: '246.69.190.186',
    amount: '$27286.84'
  },
  {
    id: 42,
    first_name: 'Erma',
    last_name: 'Garraway',
    email: 'egarraway15@nps.gov',
    gender: 'Non-binary',
    birth: '10.02.2021',
    ip_address: '215.126.55.157',
    amount: '$57725.64'
  },
  {
    id: 43,
    first_name: 'Blondelle',
    last_name: 'Walbrook',
    email: 'bwalbrook16@paypal.com',
    gender: 'Genderqueer',
    birth: '30.01.2021',
    ip_address: '169.206.91.128',
    amount: '$31162.73'
  },
  {
    id: 44,
    first_name: 'Vikki',
    last_name: 'Winslet',
    email: 'vwinslet17@squidoo.com',
    gender: 'Agender',
    birth: '16.04.2021',
    ip_address: '132.97.54.69',
    amount: '$86827.18'
  },
  {
    id: 45,
    first_name: 'Gradey',
    last_name: 'Mote',
    email: 'gmote18@mtv.com',
    gender: 'Polygender',
    birth: '20.01.2021',
    ip_address: '5.239.112.211',
    amount: '$65115.23'
  },
  {
    id: 46,
    first_name: 'Lilian',
    last_name: 'Leades',
    email: 'lleades19@pagesperso-orange.fr',
    gender: 'Agender',
    birth: '15.12.2020',
    ip_address: '149.197.30.20',
    amount: '$89517.60'
  },
  {
    id: 47,
    first_name: 'Ariana',
    last_name: 'Fraschetti',
    email: 'afraschetti1a@tinyurl.com',
    gender: 'Polygender',
    birth: '10.01.2021',
    ip_address: '230.139.125.192',
    amount: '$82171.49'
  },
  {
    id: 48,
    first_name: 'Guthrie',
    last_name: 'Linck',
    email: 'glinck1b@t-online.de',
    gender: 'Non-binary',
    birth: '23.03.2021',
    ip_address: '38.255.31.67',
    amount: '$7689.92'
  },
  {
    id: 49,
    first_name: 'Lynda',
    last_name: "D'Oyly",
    email: 'ldoyly1c@barnesandnoble.com',
    gender: 'Non-binary',
    birth: '25.01.2021',
    ip_address: '16.150.84.224',
    amount: '$81926.04'
  },
  {
    id: 50,
    first_name: 'Flossie',
    last_name: 'Farfolomeev',
    email: 'ffarfolomeev1d@addtoany.com',
    gender: 'Genderfluid',
    birth: '19.10.2020',
    ip_address: '52.10.208.255',
    amount: '$8242.27'
  },
  {
    id: 51,
    first_name: 'Jackqueline',
    last_name: 'Holworth',
    email: 'jholworth1e@flickr.com',
    gender: 'Agender',
    birth: '24.12.2020',
    ip_address: '253.111.242.210',
    amount: '$24186.73'
  },
  {
    id: 52,
    first_name: 'Welby',
    last_name: 'Oakland',
    email: 'woakland1f@go.com',
    gender: 'Female',
    birth: '01.12.2020',
    ip_address: '109.171.24.31',
    amount: '$87791.28'
  },
  {
    id: 53,
    first_name: 'Skip',
    last_name: 'Grayshan',
    email: 'sgrayshan1g@bloglovin.com',
    gender: 'Genderfluid',
    birth: '27.05.2021',
    ip_address: '88.235.177.136',
    amount: '$61022.42'
  },
  {
    id: 54,
    first_name: 'Phineas',
    last_name: 'Rummin',
    email: 'prummin1h@flavors.me',
    gender: 'Non-binary',
    birth: '22.03.2021',
    ip_address: '196.249.254.34',
    amount: '$16527.03'
  },
  {
    id: 55,
    first_name: 'Fernanda',
    last_name: "O'Caine",
    email: 'focaine1i@nbcnews.com',
    gender: 'Genderqueer',
    birth: '21.01.2021',
    ip_address: '25.102.54.158',
    amount: '$87061.60'
  },
  {
    id: 56,
    first_name: 'Marlon',
    last_name: 'Marguerite',
    email: 'mmarguerite1j@huffingtonpost.com',
    gender: 'Male',
    birth: '29.08.2020',
    ip_address: '139.67.36.237',
    amount: '$29823.86'
  },
  {
    id: 57,
    first_name: 'Hyacinth',
    last_name: 'Wohlers',
    email: 'hwohlers1k@is.gd',
    gender: 'Non-binary',
    birth: '13.11.2020',
    ip_address: '226.155.20.158',
    amount: '$14365.02'
  },
  {
    id: 58,
    first_name: 'Lief',
    last_name: 'Suddock',
    email: 'lsuddock1l@youtu.be',
    gender: 'Genderqueer',
    birth: '09.08.2020',
    ip_address: '203.242.104.21',
    amount: '$68164.35'
  },
  {
    id: 59,
    first_name: 'Delmore',
    last_name: 'Smorthwaite',
    email: 'dsmorthwaite1m@fema.gov',
    gender: 'Polygender',
    birth: '24.11.2020',
    ip_address: '12.182.131.239',
    amount: '$30673.19'
  },
  {
    id: 60,
    first_name: 'Gwendolyn',
    last_name: 'McKie',
    email: 'gmckie1n@jalbum.net',
    gender: 'Bigender',
    birth: '14.01.2021',
    ip_address: '22.33.245.252',
    amount: '$24860.41'
  },
  {
    id: 61,
    first_name: 'Jourdain',
    last_name: 'Marchelli',
    email: 'jmarchelli1o@1688.com',
    gender: 'Genderfluid',
    birth: '27.05.2021',
    ip_address: '64.193.46.23',
    amount: '$43690.96'
  },
  {
    id: 62,
    first_name: 'Tiphanie',
    last_name: 'Feifer',
    email: 'tfeifer1p@who.int',
    gender: 'Agender',
    birth: '01.09.2020',
    ip_address: '183.74.69.230',
    amount: '$7696.82'
  },
  {
    id: 63,
    first_name: 'Bridget',
    last_name: 'Fitzsymon',
    email: 'bfitzsymon1q@geocities.com',
    gender: 'Agender',
    birth: '11.03.2021',
    ip_address: '66.155.46.56',
    amount: '$73763.64'
  },
  {
    id: 64,
    first_name: 'Tulley',
    last_name: 'Beaves',
    email: 'tbeaves1r@latimes.com',
    gender: 'Genderqueer',
    birth: '20.09.2020',
    ip_address: '128.87.102.120',
    amount: '$19838.08'
  },
  {
    id: 65,
    first_name: 'Leena',
    last_name: 'Hallut',
    email: 'lhallut1s@purevolume.com',
    gender: 'Male',
    birth: '30.04.2021',
    ip_address: '44.234.74.217',
    amount: '$78398.59'
  },
  {
    id: 66,
    first_name: 'Laurette',
    last_name: 'Burg',
    email: 'lburg1t@wsj.com',
    gender: 'Agender',
    birth: '10.02.2021',
    ip_address: '52.22.143.107',
    amount: '$85680.29'
  },
  {
    id: 67,
    first_name: 'Elka',
    last_name: 'Southerns',
    email: 'esoutherns1u@baidu.com',
    gender: 'Genderqueer',
    birth: '18.04.2021',
    ip_address: '52.81.52.65',
    amount: '$22190.72'
  },
  {
    id: 68,
    first_name: 'Siward',
    last_name: 'Bloschke',
    email: 'sbloschke1v@hud.gov',
    gender: 'Non-binary',
    birth: '18.02.2021',
    ip_address: '157.77.133.130',
    amount: '$96293.35'
  },
  {
    id: 69,
    first_name: 'Nerti',
    last_name: 'Weaben',
    email: 'nweaben1w@devhub.com',
    gender: 'Female',
    birth: '04.02.2021',
    ip_address: '153.161.119.237',
    amount: '$29930.46'
  },
  {
    id: 70,
    first_name: 'Orland',
    last_name: 'Coltart',
    email: 'ocoltart1x@geocities.com',
    gender: 'Non-binary',
    birth: '22.02.2021',
    ip_address: '207.254.224.56',
    amount: '$5332.81'
  },
  {
    id: 71,
    first_name: 'Holmes',
    last_name: 'Stivens',
    email: 'hstivens1y@ask.com',
    gender: 'Genderfluid',
    birth: '07.01.2021',
    ip_address: '31.186.170.224',
    amount: '$15533.54'
  },
  {
    id: 72,
    first_name: 'Monique',
    last_name: 'Langridge',
    email: 'mlangridge1z@slideshare.net',
    gender: 'Genderfluid',
    birth: '16.12.2020',
    ip_address: '52.198.121.23',
    amount: '$17100.63'
  },
  {
    id: 73,
    first_name: 'Claudette',
    last_name: 'Carson',
    email: 'ccarson20@state.gov',
    gender: 'Female',
    birth: '24.01.2021',
    ip_address: '0.111.249.98',
    amount: '$37026.82'
  },
  {
    id: 74,
    first_name: 'Grannie',
    last_name: 'Verecker',
    email: 'gverecker21@arizona.edu',
    gender: 'Female',
    birth: '14.03.2021',
    ip_address: '209.72.7.20',
    amount: '$77597.65'
  },
  {
    id: 75,
    first_name: 'Cassie',
    last_name: 'Cummins',
    email: 'ccummins22@icio.us',
    gender: 'Female',
    birth: '16.09.2020',
    ip_address: '168.147.29.235',
    amount: '$1084.54'
  },
  {
    id: 76,
    first_name: 'Carlotta',
    last_name: 'Growcott',
    email: 'cgrowcott23@buzzfeed.com',
    gender: 'Male',
    birth: '21.03.2021',
    ip_address: '119.14.239.89',
    amount: '$33504.11'
  },
  {
    id: 77,
    first_name: 'Ferd',
    last_name: 'Vaney',
    email: 'fvaney24@blog.com',
    gender: 'Genderfluid',
    birth: '09.12.2020',
    ip_address: '230.188.140.82',
    amount: '$24526.54'
  },
  {
    id: 78,
    first_name: 'Ignacio',
    last_name: 'Syres',
    email: 'isyres25@hp.com',
    gender: 'Bigender',
    birth: '27.05.2021',
    ip_address: '12.42.110.70',
    amount: '$7120.09'
  },
  {
    id: 79,
    first_name: 'Marlow',
    last_name: 'Clarson',
    email: 'mclarson26@stanford.edu',
    gender: 'Genderqueer',
    birth: '31.12.2020',
    ip_address: '199.116.6.193',
    amount: '$43888.86'
  },
  {
    id: 80,
    first_name: 'Chas',
    last_name: 'Mealiffe',
    email: 'cmealiffe27@biglobe.ne.jp',
    gender: 'Genderqueer',
    birth: '12.07.2020',
    ip_address: '203.45.159.214',
    amount: '$24636.08'
  },
  {
    id: 81,
    first_name: 'Walden',
    last_name: 'Patinkin',
    email: 'wpatinkin28@nytimes.com',
    gender: 'Polygender',
    birth: '06.06.2021',
    ip_address: '105.83.62.31',
    amount: '$49822.79'
  },
  {
    id: 82,
    first_name: 'Zachary',
    last_name: 'Faltskog',
    email: 'zfaltskog29@cnbc.com',
    gender: 'Non-binary',
    birth: '21.01.2021',
    ip_address: '138.255.159.231',
    amount: '$8543.26'
  },
  {
    id: 83,
    first_name: 'Peyton',
    last_name: 'Kid',
    email: 'pkid2a@4shared.com',
    gender: 'Non-binary',
    birth: '20.05.2021',
    ip_address: '55.107.52.2',
    amount: '$75793.59'
  },
  {
    id: 84,
    first_name: 'Dmitri',
    last_name: 'Gooderick',
    email: 'dgooderick2b@furl.net',
    gender: 'Agender',
    birth: '15.05.2021',
    ip_address: '204.208.114.234',
    amount: '$51630.67'
  },
  {
    id: 85,
    first_name: 'Tybalt',
    last_name: 'Brickner',
    email: 'tbrickner2c@noaa.gov',
    gender: 'Male',
    birth: '25.05.2021',
    ip_address: '245.210.10.54',
    amount: '$17606.73'
  }
];

const App = () => {
  const [inscricao, setInscricao] = useState('');
  // const iRef = useRef(null);

  const columns = [
    {
      name: 'first_name',
      label: 'First Name'
    },
    {
      name: 'last_name',
      label: 'Last Name'
    }
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <DataTable data={fakeData} columns={columns} />
    </div>
  );
};

export default App;
