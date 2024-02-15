// Assets
import { Path, Svg, SvgProps } from 'react-native-svg';

function Logo(props: SvgProps & { size?: number }) {
  const { size } = props;

  // Render
  return (
    <Svg width={size ?? '60'} height={size ?? '60'} viewBox='0 0 1080 1080'>
      <Path
        d='M0 0 C0.99944641 0.0901236 1.99889282 0.18024719 3.02862549 0.27310181 C13.62192983 1.27107542 24.15564687 2.65563426 34.68701172 4.1640625 C37.90942637 4.62264259 41.13416733 5.06154675 44.359375 5.5 C46.45199045 5.79569175 48.54444506 6.09252456 50.63671875 6.390625 C52.05105194 6.57992081 52.05105194 6.57992081 53.49395752 6.77304077 C67.26556464 8.80070853 79.83957828 14.09641786 88.62109375 25.2421875 C92.65062061 32.44347065 94.74675693 38.65451206 94.74414158 46.88762283 C94.74529542 47.55745744 94.74644927 48.22729205 94.74763808 48.91742468 C94.75029434 51.17196433 94.7457907 53.42643321 94.74134827 55.68096924 C94.74178417 57.30959297 94.74265943 58.93821664 94.74393743 60.56683993 C94.74617862 65.05003154 94.74216621 69.53319936 94.73715937 74.01638794 C94.7328497 78.84799195 94.73430166 83.67959456 94.73506165 88.51119995 C94.73558655 96.88490366 94.73244322 105.25859958 94.72682381 113.63230133 C94.71870431 125.73933919 94.71609312 137.84637329 94.71483582 149.95341358 C94.71264601 169.5952466 94.70598784 189.23707548 94.6965332 208.87890625 C94.68735725 227.96158833 94.68027731 247.04426928 94.67602539 266.12695312 C94.67576267 267.30277849 94.67549994 268.47860385 94.67522926 269.69006029 C94.67392424 275.58870182 94.67266053 281.48734335 94.67141736 287.3859849 C94.66104695 336.3380553 94.64343056 385.2901212 94.62109375 434.2421875 C87.32660007 435.53105598 80.03074179 436.81197108 72.73388672 438.08740234 C70.25244642 438.52210012 67.77132256 438.95860839 65.29052734 439.39697266 C61.7218487 440.0272439 58.15207761 440.65096627 54.58203125 441.2734375 C52.92232803 441.56873352 52.92232803 441.56873352 51.22909546 441.86999512 C50.18846954 442.05018188 49.14784363 442.23036865 48.07568359 442.41601562 C47.16523285 442.57589966 46.2547821 442.73578369 45.31674194 442.9005127 C42.62109375 443.2421875 42.62109375 443.2421875 36.62109375 443.2421875 C36.62109375 423.7721875 36.62109375 404.3021875 36.62109375 384.2421875 C30.02109375 384.2421875 23.42109375 384.2421875 16.62109375 384.2421875 C16.62109375 404.7021875 16.62109375 425.1621875 16.62109375 446.2421875 C-12.58390625 448.2221875 -12.58390625 448.2221875 -42.37890625 450.2421875 C-42.44671836 396.39731906 -42.50043132 342.55246086 -42.53210224 288.70755819 C-42.53585438 282.35142544 -42.53973735 275.99529278 -42.54370117 269.63916016 C-42.5444881 268.3737626 -42.54527503 267.10836504 -42.54608581 265.8046221 C-42.55914158 245.31247549 -42.58279638 224.82035411 -42.61036464 204.32822247 C-42.63841406 183.30316503 -42.65508153 162.27812082 -42.66117173 141.25304544 C-42.66528913 128.27829428 -42.67829613 115.30361445 -42.70265565 102.32888524 C-42.71850709 93.43298549 -42.72330794 84.53712265 -42.71941038 75.6412098 C-42.71748793 70.50789656 -42.72044591 65.37470802 -42.73652267 60.24141693 C-42.75114076 55.53951962 -42.75184615 50.83783065 -42.74160293 46.13592367 C-42.74033726 44.43723328 -42.74412657 42.73852979 -42.7535558 41.03986509 C-42.81889124 28.54037039 -42.15961278 16.97165681 -33.37890625 7.2421875 C-23.46570155 -1.14452735 -12.24547339 -1.13116236 0 0 Z M18.62109375 68.2421875 C18.62109375 150.0821875 18.62109375 231.9221875 18.62109375 316.2421875 C28.36367299 315.51167486 28.36367299 315.51167486 36.62109375 313.2421875 C36.62109375 233.7121875 36.62109375 154.1821875 36.62109375 72.2421875 C29.73730583 69.77429978 29.73730583 69.77429978 18.62109375 68.2421875 Z '
        fill='#CB242A'
        transform='translate(640.37890625,294.7578125)'
      />
      <Path
        d='M0 0 C14.18846283 0 14.18846283 0 20.625 1.125 C21.75977783 1.32186401 21.75977783 1.32186401 22.91748047 1.52270508 C37.58805905 4.26680938 50.96626919 9.85090138 64 17 C64.92296875 17.50402344 65.8459375 18.00804687 66.796875 18.52734375 C99.21772917 37.16417234 122.89654842 68.12150628 132.75 104.03125 C139.38341682 129.65133292 138.17235019 156.32991607 138.20018864 182.58701253 C138.2031538 185.24851062 138.20726403 187.91000474 138.21169281 190.57150078 C138.22529645 198.9446539 138.23500156 207.31779756 138.2388947 215.69096094 C138.24337908 225.27444801 138.26097491 234.85779272 138.2898953 244.44123656 C138.31163777 251.91112803 138.32160538 259.38097977 138.32293582 266.8509025 C138.3239735 271.28570404 138.32965797 275.72037048 138.34775543 280.15513802 C138.51261522 323.04097899 132.21190766 358.72765987 101.41650391 390.53222656 C99.99524487 392.00492724 98.59721558 393.49742498 97.19921875 394.9921875 C74.57059694 418.80751701 43.98365492 433.60326902 12 440 C8.04 440 4.08 440 0 440 C0 294.8 0 149.6 0 0 Z M59 104 C59 180.89 59 257.78 59 337 C65.83080031 334.653464 65.83080031 334.653464 71.25 330.9375 C71.87390625 330.43089844 72.4978125 329.92429687 73.140625 329.40234375 C80.36013404 320.07461673 79.56542023 309.38514787 79.50170898 298.19897461 C79.50549676 296.30079244 79.51100057 294.40261305 79.51808167 292.50444031 C79.53199269 287.37224189 79.52089749 282.24038035 79.50437045 277.10820079 C79.49047474 271.72590446 79.4969851 266.34362679 79.50050354 260.96131897 C79.50320186 251.92557373 79.4897618 242.88996161 79.46655273 233.85424805 C79.43993739 223.4204439 79.43819991 212.98686215 79.4499411 202.55303568 C79.46073431 192.49793472 79.4545202 182.4429139 79.44038582 172.38781929 C79.43464023 168.11650247 79.43469744 163.84524457 79.43945122 159.57392693 C79.44423683 154.54149359 79.43405374 149.50930263 79.41249657 144.47691536 C79.4069504 142.63431745 79.40644338 140.79169614 79.41144943 138.94909668 C79.62495086 122.42357607 79.62495086 122.42357607 71.609375 108.44140625 C67.4613896 104.72634166 64.53183429 104 59 104 Z '
        fill='#CB242A'
        transform='translate(442,299)'
      />
      <Path
        d='M0 0 C0.92377441 0.44166504 1.84754883 0.88333008 2.79931641 1.33837891 C5.42072965 2.59709016 8.0248542 3.88551317 10.625 5.1875 C11.38852783 5.55472168 12.15205566 5.92194336 12.9387207 6.30029297 C19.9256514 9.91087754 24.09932495 15.14133575 26.8125 22.5 C29.15157083 29.87161717 29.14157222 37.53575254 29.09765625 45.1875 C29.0962413 46.13061035 29.09482635 47.0737207 29.09336853 48.04541016 C29.0878124 51.03030697 29.07526823 54.01512621 29.0625 57 C29.05747932 59.03515516 29.05291741 61.07031151 29.04882812 63.10546875 C29.03785737 68.07034197 29.02062339 73.03515787 29 78 C25.32797651 77.40258059 22.39595097 76.37722717 19.078125 74.70703125 C18.14282959 74.24401611 17.20753418 73.78100098 16.24389648 73.30395508 C15.25591064 72.8117749 14.2679248 72.31959473 13.25 71.8125 C6.08838647 68.31923729 -1.04906218 64.98076838 -8.5625 62.3125 C-9.23313477 62.06927002 -9.90376953 61.82604004 -10.59472656 61.57543945 C-14.50635346 60.24438585 -17.89242525 59.34075961 -22 60 C-25.27204597 62.42574916 -26.75704808 63.9798704 -27.70703125 67.96875 C-27.74183594 69.1340625 -27.77664063 70.299375 -27.8125 71.5 C-27.83618652 72.16580078 -27.85987305 72.83160156 -27.88427734 73.51757812 C-27.95684332 76.01210189 -27.98036748 78.5044888 -28 81 C-28.02054443 82.64548828 -28.02054443 82.64548828 -28.04150391 84.32421875 C-28.37349172 113.92313184 -28.49781537 130.73893169 -8 153 C-7.05820959 154.03480675 -6.11681836 155.06997691 -5.17578125 156.10546875 C-0.64213467 161.07310032 3.91684853 165.95989633 8.76245117 170.62597656 C18.05603021 179.61362427 27.19535437 191.58696837 28.14425182 205.04605675 C28.15330201 205.77636919 28.1623522 206.50668163 28.17167664 207.25912476 C28.18435577 208.10263489 28.19703491 208.94614502 28.21009827 209.81521606 C28.21899582 210.73261566 28.22789337 211.65001526 28.23706055 212.59521484 C28.25017273 213.56817505 28.26328491 214.54113525 28.27679443 215.5435791 C28.31862522 218.76599184 28.35313451 221.98842889 28.38671875 225.2109375 C28.41239067 227.45854822 28.43817459 229.70615766 28.46406555 231.95376587 C28.51706569 236.67308572 28.56596982 241.39242905 28.61254883 246.11181641 C28.67263404 252.12802496 28.74692134 258.14396431 28.82492352 264.15996361 C28.88286773 268.80821094 28.93100202 273.45652381 28.976511 278.10490799 C28.99975626 280.32066385 29.02645971 282.53638646 29.05682945 284.75205612 C29.56901222 323.06793128 29.56901222 323.06793128 15.8125 338 C-2.32021183 354.35558559 -42.68978982 365.00885588 -66.83984375 364.2421875 C-72.35656291 363.62367649 -76.47458938 361.94923516 -80.3125 357.875 C-90.04011909 345.19482444 -88.46538873 325.18209067 -89 310 C-85.14484514 308.70646834 -81.28886593 307.41542258 -77.43231201 306.12606812 C-76.06328315 305.66786362 -74.69450738 305.20890224 -73.32598877 304.74917603 C-66.32523849 302.39742474 -59.32671646 300.06844785 -52.25 297.953125 C-51.2492041 297.65092041 -50.2484082 297.34871582 -49.21728516 297.03735352 C-47.36710625 296.48414335 -45.51270273 295.94480966 -43.65380859 295.42163086 C-38.67971124 293.92533009 -35.72621302 292.70956905 -33 288 C-31.84705283 284.53837105 -31.88942792 281.27597703 -31.91479492 277.64599609 C-31.92198044 276.35720551 -31.92916595 275.06841492 -31.93656921 273.74057007 C-31.95051014 272.33485218 -31.96516134 270.92914118 -31.98046875 269.5234375 C-31.98742579 268.81143818 -31.99438282 268.09943886 -32.00155067 267.3658638 C-32.03891699 263.59358864 -32.08289132 259.82145516 -32.13208008 256.04931641 C-32.18125747 252.1762427 -32.20757644 248.3033739 -32.22851086 244.43005943 C-32.24901214 241.43217312 -32.28693741 238.43467941 -32.3293705 235.43703079 C-32.34657505 234.01074134 -32.35737424 232.58435818 -32.36131859 231.15797043 C-32.39890207 220.64176441 -33.25755982 211.13419879 -40.875 203.25 C-42.04289063 202.02410156 -42.04289063 202.02410156 -43.234375 200.7734375 C-44.14703125 199.85820313 -45.0596875 198.94296875 -46 198 C-46.55107422 197.44731445 -47.10214844 196.89462891 -47.66992188 196.32519531 C-50.10020987 193.89091451 -52.53432105 191.46061776 -54.97705078 189.03881836 C-58.56916826 185.46964591 -62.03297187 181.85554613 -65.29296875 177.9765625 C-66.62664888 176.43230129 -68.01625079 174.93629144 -69.42578125 173.4609375 C-83.53477924 158.62036183 -88.13032184 142.67138603 -88.17700195 122.62988281 C-88.18357315 121.39807281 -88.19014435 120.16626282 -88.19691467 118.89712524 C-88.21657871 114.83245594 -88.22830327 110.76782594 -88.23828125 106.703125 C-88.24233343 105.2970452 -88.24645049 103.89096559 -88.25063133 102.48488617 C-88.26965254 95.87743342 -88.28389109 89.26999165 -88.2922433 82.66251683 C-88.30201061 75.06363749 -88.32832959 67.46504981 -88.36874419 59.86627316 C-88.39900092 53.97301286 -88.4137211 48.07983576 -88.41702431 42.18649936 C-88.41936344 38.67558462 -88.42817445 35.16498256 -88.45348549 31.65415192 C-88.48130962 27.73190688 -88.47690594 23.81003984 -88.4699707 19.88769531 C-88.48278076 18.74134613 -88.49559082 17.59499695 -88.50878906 16.41390991 C-88.44146516 5.92319631 -86.11301438 -2.68749567 -78.71484375 -10.3515625 C-78.14894531 -10.89554687 -77.58304688 -11.43953125 -77 -12 C-76.21625 -12.763125 -75.4325 -13.52625 -74.625 -14.3125 C-51.91537477 -28.91154479 -20.88575735 -10.20786457 0 0 Z '
        fill='#CB242A'
        transform='translate(841,346)'
      />
      <Path
        d='M0 0 C0 22.11 0 44.22 0 67 C-9.9309375 70.403125 -9.9309375 70.403125 -20.0625 73.875 C-22.13926025 74.58769043 -24.21602051 75.30038086 -26.35571289 76.03466797 C-28.01964615 76.60398106 -29.68362431 77.17316291 -31.34765625 77.7421875 C-32.19710815 78.03424072 -33.04656006 78.32629395 -33.92175293 78.62719727 C-34.75331909 78.91119385 -35.58488525 79.19519043 -36.44165039 79.48779297 C-37.51087486 79.85419388 -37.51087486 79.85419388 -38.60169983 80.22799683 C-41.71078355 81.22879836 -44.85947889 82.10270826 -48 83 C-48 141.08 -48 199.16 -48 259 C-42.555 260.485 -42.555 260.485 -37 262 C-34.01727292 262.93753856 -31.04942083 263.8894879 -28.0859375 264.8828125 C-27.30481598 265.14254852 -26.52369446 265.40228455 -25.71890259 265.66989136 C-24.09352363 266.21123596 -22.46863594 266.75405777 -20.84423828 267.29833984 C-18.34686576 268.13441888 -15.84738061 268.96395117 -13.34765625 269.79296875 C-11.76028802 270.32253121 -10.17304365 270.85246511 -8.5859375 271.3828125 C-7.83815033 271.6307254 -7.09036316 271.87863831 -6.31991577 272.13406372 C-1.11500094 273.88499906 -1.11500094 273.88499906 0 275 C0.09396057 276.93306498 0.11743517 278.86958838 0.11352539 280.80493164 C0.11341209 282.66674828 0.11341209 282.66674828 0.11329651 284.56617737 C0.10818911 285.9308374 0.1029731 287.29549702 0.09765625 288.66015625 C0.095792 290.04878183 0.09436813 291.43740807 0.09336853 292.82603455 C0.08954387 296.48721115 0.07971403 300.1483483 0.06866455 303.80950928 C0.05844932 307.54292263 0.05387067 311.27634234 0.04882812 315.00976562 C0.03809171 322.33986177 0.02101591 329.66992536 0 337 C-6.10075684 335.74879191 -11.98881011 334.16120103 -17.90234375 332.21484375 C-18.70611954 331.95369278 -19.50989532 331.69254181 -20.33802795 331.42347717 C-22.01839131 330.87664821 -23.69811017 330.32783499 -25.37719727 329.77709961 C-27.95378682 328.93215907 -30.5323624 328.09351605 -33.11132812 327.25585938 C-34.75011796 326.72171595 -36.38879407 326.18722342 -38.02734375 325.65234375 C-38.79811752 325.40129379 -39.5688913 325.15024384 -40.36302185 324.8915863 C-45.76629357 323.11685322 -45.76629357 323.11685322 -48 322 C-48 343.12 -48 364.24 -48 386 C-70.22417673 383.77758233 -86.25202465 374.03934291 -107 364 C-107 256.75 -107 149.5 -107 39 C-93.50078368 33.37532653 -93.50078368 33.37532653 -88.56176758 31.60327148 C-87.44689468 31.20155228 -86.33202179 30.79983307 -85.18336487 30.38594055 C-84.01554977 29.96854111 -82.84773468 29.55114166 -81.64453125 29.12109375 C-80.38234077 28.66740882 -79.12025328 28.21343731 -77.85826111 27.75920105 C-74.52759971 26.56113254 -71.19569078 25.36657247 -67.86351013 24.17273712 C-64.42483748 22.94005682 -60.9873265 21.70414696 -57.54980469 20.46826172 C-56.52902675 20.10127544 -56.52902675 20.10127544 -55.48762703 19.72687531 C-54.12030422 19.23529827 -52.7529851 18.743711 -51.38566971 18.25211334 C-49.3561271 17.52257617 -47.32643965 16.79344325 -45.29672241 16.06439209 C-37.75325864 13.35425052 -30.21410451 10.63268754 -22.68359375 7.88671875 C-21.88689774 7.5962114 -21.09020172 7.30570404 -20.2693634 7.00639343 C-16.75390735 5.72354726 -13.23947733 4.43793759 -9.72583008 3.15014648 C-8.5530249 2.72161377 -7.38021973 2.29308105 -6.171875 1.8515625 C-5.1828418 1.48885254 -4.19380859 1.12614258 -3.17480469 0.75244141 C-1 0 -1 0 0 0 Z '
        fill='#CB242A'
        transform='translate(337,317)'
      />
      <Path
        d='M0 0 C0 143.88 0 287.76 0 436 C-11.25227327 434.87477267 -11.25227327 434.87477267 -15.70922852 433.984375 C-17.20481041 433.68901855 -17.20481041 433.68901855 -18.73060608 433.38769531 C-19.76954514 433.17725586 -20.80848419 432.96681641 -21.87890625 432.75 C-22.97218735 432.53182617 -24.06546844 432.31365234 -25.19187927 432.08886719 C-27.48230972 431.63058646 -29.77226832 431.16994165 -32.06176758 430.70703125 C-35.58220981 429.99601928 -39.10443336 429.2943887 -42.62695312 428.59375 C-44.85688183 428.14638625 -47.08670358 427.69848896 -49.31640625 427.25 C-50.37356339 427.03956055 -51.43072052 426.82912109 -52.51991272 426.61230469 C-53.97294044 426.31694824 -53.97294044 426.31694824 -55.45532227 426.015625 C-56.31118423 425.84321289 -57.1670462 425.67080078 -58.04884338 425.49316406 C-60 425 -60 425 -61 424 C-61.09807317 421.8108045 -61.12371128 419.61836919 -61.12304783 417.42697811 C-61.12420167 416.72852594 -61.12535552 416.03007376 -61.12654433 415.31045637 C-61.12921771 412.94050382 -61.12468295 410.57061752 -61.12025452 408.20066833 C-61.12069007 406.49626257 -61.12156469 404.79185686 -61.12284368 403.08745152 C-61.12509174 398.38085242 -61.12106314 393.67427585 -61.11606562 388.96767962 C-61.11176573 383.90084686 -61.11320721 378.83401547 -61.1139679 373.7671814 C-61.11449343 364.98090245 -61.11134361 356.19463089 -61.10573006 347.40835381 C-61.09761896 334.70471526 -61.09500024 322.00108032 -61.09374207 309.29743946 C-61.09155093 288.68893222 -61.08488918 268.08042893 -61.07543945 247.47192383 C-61.06626693 227.44718445 -61.05918531 207.42244614 -61.05493164 187.39770508 C-61.05453756 185.5476554 -61.05453756 185.5476554 -61.05413551 183.66023099 C-61.05283052 177.4730802 -61.0515668 171.28592941 -61.05032361 165.09877861 C-61.03994907 113.73251634 -61.02232909 62.36625836 -61 11 C-53.49016735 9.56254258 -45.97977435 8.12804579 -38.46865368 6.69733429 C-34.98101924 6.03291627 -31.49358611 5.3674771 -28.0065918 4.69970703 C-23.99845947 3.93218374 -19.98949362 3.16909764 -15.98046875 2.40625 C-14.10067574 2.04533264 -14.10067574 2.04533264 -12.1829071 1.67712402 C-11.02193008 1.45689575 -9.86095306 1.23666748 -8.66479492 1.00976562 C-7.12924202 0.7166449 -7.12924202 0.7166449 -5.56266785 0.41760254 C-3 0 -3 0 0 0 Z '
        fill='#CB242A'
        transform='translate(419,300)'
      />
      <Path
        d='M0 0 C1.03125 0.7425 2.0625 1.485 3.125 2.25 C11.79501555 10.54305835 17.37417556 21.30001436 18.23828125 33.3125 C18.53047699 47.83001476 14.94184246 59.89811313 5.26171875 70.9921875 C-3.9550607 79.87345249 -16.68789806 84.93525769 -29.37109375 85.0234375 C-43.48321988 84.43607628 -55.28355026 80.21844926 -65.1015625 69.76171875 C-66.87644038 67.57522026 -68.46851068 65.36226983 -70 63 C-70.39832031 62.38769531 -70.79664063 61.77539062 -71.20703125 61.14453125 C-77.76206541 49.63025776 -78.43551715 35.53182959 -75 23 C-70.56439775 10.33294357 -62.94281645 0.93712009 -51.0625 -5.3125 C-34.14735986 -13.24147194 -14.85703618 -11.7438398 0 0 Z '
        fill='#CB242A'
        transform='translate(961,481)'
      />
      <Path
        d='M0 0 C8.99460036 7.40564888 16.20884012 17.29084739 18 29 C19.40810493 45.4202588 16.76572409 58.06332555 6.328125 71.0859375 C-0.78893978 79.02420207 -11.52196465 84.46551741 -22.09765625 85.84765625 C-36.18776601 86.58724478 -49.03726306 84.19795777 -60.0078125 74.875 C-69.27294718 66.15487324 -75.59534676 55.95432015 -76.3359375 42.95703125 C-76.66818397 27.75176262 -73.30443353 15.85711768 -62.7109375 4.55859375 C-45.40984868 -12.11086802 -19.73440888 -13.57111001 0 0 Z '
        fill='#CB242A'
        transform='translate(192,480)'
      />
      <Path
        d='M0 0 C14 0 14 0 17.7890625 2.9375 C18.77997657 4.25866327 19.7242868 5.61576779 20.625 7 C21.1502124 7.7211499 21.6754248 8.4422998 22.21655273 9.18530273 C23.30776117 10.68940968 24.38030067 12.2072315 25.43408203 13.73779297 C27.40261423 16.58163758 29.479169 19.33336652 31.56835938 22.08911133 C33.05708829 24.05535248 34.52697283 26.03470813 35.99609375 28.015625 C39.60413316 32.84225793 43.3748188 37.535461 47.16821289 42.21704102 C49.22515924 44.75888155 51.184625 47.2769375 53 50 C53.33 33.5 53.66 17 54 0 C58.95 0 63.9 0 69 0 C69 25.74 69 51.48 69 78 C56 78 56 78 52.3125 74.8125 C51.17926477 73.22873467 50.07797421 71.62188357 49 70 C47.48821194 68.03467552 45.96644705 66.07700522 44.4375 64.125 C43.58046479 63.00379982 42.72506806 61.8813458 41.87109375 60.7578125 C38.06986437 55.76911824 34.20615431 50.8290723 30.34936523 45.88330078 C25.20341766 39.27755818 20.10586987 32.63763083 15 26 C14.67 43.16 14.34 60.32 14 78 C9.38 78 4.76 78 0 78 C0 52.26 0 26.52 0 0 Z '
        fill='#134D93'
        transform='translate(644,793)'
      />
      <Path
        d='M0 0 C8.53565109 6.15524675 14.55650752 14.51759613 17.140625 24.78515625 C19.10131948 37.43718481 17.34877365 48.90836529 10.4296875 59.76953125 C6.56677524 64.90086246 2.0926181 68.27440955 -3.4453125 71.45703125 C-4.4971875 72.10865234 -4.4971875 72.10865234 -5.5703125 72.7734375 C-14.9101498 77.56010412 -28.16856997 76.95023526 -38.15625 74.57421875 C-41.12898601 73.42027752 -43.72896882 72.12243385 -46.4453125 70.45703125 C-47.26128906 69.96074219 -48.07726562 69.46445312 -48.91796875 68.953125 C-57.39687879 63.07875494 -62.73476496 54.33344041 -65.0078125 44.33203125 C-66.75995262 32.81796758 -65.60643818 20.91193055 -58.7578125 11.14453125 C-44.36066858 -5.9656423 -19.86629099 -12.5354392 0 0 Z M-46.0703125 19.078125 C-50.31432605 26.42075071 -50.28336978 34.19618088 -49.4453125 42.45703125 C-46.70013509 51.23706147 -41.20734391 56.73231648 -33.4453125 61.45703125 C-27.32539469 63.49700385 -19.88203069 63.56133695 -13.734375 61.5859375 C-6.16741663 57.64750354 -1.02219938 51.59456876 1.5546875 43.45703125 C3.61483932 34.17141942 2.0124707 25.53238866 -2.69921875 17.25390625 C-7.1386617 11.43583287 -13.45136054 8.05979946 -20.62890625 6.9765625 C-31.95540027 6.48294615 -39.34115733 10.03582274 -46.0703125 19.078125 Z '
        fill='#134D93'
        transform='translate(602.4453125,796.54296875)'
      />
      <Path
        d='M0 0 C10.828125 -0.12375 10.828125 -0.12375 21.875 -0.25 C25.26241455 -0.30462402 25.26241455 -0.30462402 28.71826172 -0.36035156 C30.53872736 -0.3720506 32.35920358 -0.38223954 34.1796875 -0.390625 C35.56039429 -0.4213208 35.56039429 -0.4213208 36.96899414 -0.45263672 C44.5330939 -0.45664419 51.48246913 1.11382083 57.4375 6 C58.2109375 6.99 58.2109375 6.99 59 8 C59.53625 8.66 60.0725 9.32 60.625 10 C64.93974111 16.27598707 65.68430789 23.25680709 64.6015625 30.76171875 C62.8625477 37.44158146 59.82027291 42.68030276 53.83203125 46.31640625 C51.92412356 47.28555582 49.96516262 48.15294715 48 49 C51.11456579 54.74583688 54.74500215 59.93477969 58.625 65.1875 C59.7865947 66.76230515 60.94555198 68.33905989 62.1015625 69.91796875 C62.86460693 70.95087036 62.86460693 70.95087036 63.64306641 72.00463867 C64.9601316 73.94137379 66.00612427 75.88216165 67 78 C60.98606281 79.09344313 54.8952823 80.05249485 49 78 C43.85530393 73.84523472 40.59630386 67.9234271 37.34130859 62.25732422 C36.04871688 60.08198694 34.64845891 58.0683315 33.14453125 56.03515625 C31 53 31 53 31 51 C25.39 51 19.78 51 14 51 C14 59.91 14 68.82 14 78 C9.38 78 4.76 78 0 78 C0 52.26 0 26.52 0 0 Z M14 12 C14 20.91 14 29.82 14 39 C18.6715625 39.061875 18.6715625 39.061875 23.4375 39.125 C24.88080688 39.15231201 24.88080688 39.15231201 26.35327148 39.18017578 C33.35361668 39.22445916 40.28023271 39.1410934 45.9375 34.6875 C49.34326342 30.25578722 49.34326342 30.25578722 49.84375 24.82421875 C49.19884237 21.03538641 48.45979854 18.56037948 46 15.5625 C36.22006242 10.46878251 24.68443353 11.84951502 14 12 Z '
        fill='#134D93'
        transform='translate(453,793)'
      />
      <Path
        d='M0 0 C19.47 0 38.94 0 59 0 C59 3.96 59 7.92 59 12 C44.15 12 29.3 12 14 12 C14 18.6 14 25.2 14 32 C27.2 32 40.4 32 54 32 C54 35.96 54 39.92 54 44 C40.8 44 27.6 44 14 44 C14 51.26 14 58.52 14 66 C28.85 66 43.7 66 59 66 C59 69.96 59 73.92 59 78 C39.53 78 20.06 78 0 78 C0 52.26 0 26.52 0 0 Z '
        fill='#134D93'
        transform='translate(370,793)'
      />
      <Path
        d='M0 0 C1.39456452 0.00667256 2.78911118 0.01863093 4.18359375 0.03515625 C5.2499707 0.04192383 5.2499707 0.04192383 6.33789062 0.04882812 C8.09899388 0.06064761 9.86005411 0.07858362 11.62109375 0.09765625 C11.92063965 0.79173584 12.22018555 1.48581543 12.52880859 2.20092773 C14.01663137 5.64622136 15.50599218 9.09084779 16.99609375 12.53515625 C17.27588074 13.18204407 17.55566772 13.82893188 17.84393311 14.49542236 C21.66330533 23.32193279 25.51094186 32.13560556 29.38671875 40.9375 C29.9909819 42.31043465 29.9909819 42.31043465 30.60745239 43.71110535 C32.60696131 48.25328032 34.609056 52.79429138 36.61474609 57.33374023 C37.35912742 59.0232404 38.10343419 60.71277342 38.84765625 62.40234375 C39.18468567 63.16276474 39.52171509 63.92318573 39.86895752 64.70664978 C41.9551131 69.44975574 43.84121593 74.23100694 45.62109375 79.09765625 C40.34109375 79.09765625 35.06109375 79.09765625 29.62109375 79.09765625 C26.53097514 73.08445246 24.01503345 67.48149545 21.62109375 61.09765625 C9.74109375 60.76765625 -2.13890625 60.43765625 -14.37890625 60.09765625 C-15.36890625 63.06765625 -16.35890625 66.03765625 -17.37890625 69.09765625 C-18.92227804 72.51046429 -20.64640025 75.77311772 -22.37890625 79.09765625 C-27.32890625 79.09765625 -32.27890625 79.09765625 -37.37890625 79.09765625 C-35.36816554 72.78139335 -33.03500199 66.76816538 -30.31640625 60.7265625 C-29.92818695 59.8540535 -29.53996765 58.98154449 -29.13998413 58.08259583 C-28.31450307 56.22794318 -27.4872653 54.37407156 -26.65838623 52.52093506 C-24.50695639 47.7105707 -22.36811884 42.89462564 -20.23046875 38.078125 C-19.81004303 37.13124817 -19.38961731 36.18437134 -18.95645142 35.20880127 C-14.99541098 26.26880265 -11.16624353 17.27800219 -7.4140625 8.24829102 C-7.01832031 7.29881592 -6.62257813 6.34934082 -6.21484375 5.37109375 C-5.8801709 4.56075684 -5.54549805 3.75041992 -5.20068359 2.91552734 C-3.79157037 -0.20160191 -3.74820015 0.10832948 0 0 Z M3.62109375 19.09765625 C0.29759486 25.53251581 -2.86830984 32.01787292 -5.75390625 38.66015625 C-6.25664063 39.81644531 -6.759375 40.97273437 -7.27734375 42.1640625 C-8.55467287 45.04347826 -8.55467287 45.04347826 -8.37890625 48.09765625 C-0.12890625 48.09765625 8.12109375 48.09765625 16.62109375 48.09765625 C15.92242188 46.42316406 15.22375 44.74867188 14.50390625 43.0234375 C13.58461654 40.81901829 12.66534674 38.61459077 11.74609375 36.41015625 C11.28589844 35.30736328 10.82570313 34.20457031 10.3515625 33.06835938 C9.90683594 32.00166016 9.46210937 30.93496094 9.00390625 29.8359375 C8.59543457 28.85665283 8.18696289 27.87736816 7.76611328 26.8684082 C6.6986913 24.28542907 5.6533436 21.6948632 4.62109375 19.09765625 C4.29109375 19.09765625 3.96109375 19.09765625 3.62109375 19.09765625 Z '
        fill='#134D93'
        transform='translate(770.37890625,791.90234375)'
      />
      <Path
        d='M0 0 C5.28 0 10.56 0 16 0 C18.9566566 5.71437438 21.47323527 11.46761664 23.78515625 17.46875 C24.12751816 18.34849487 24.46988007 19.22823975 24.82261658 20.13464355 C25.90618278 22.92171163 26.98437013 25.71082513 28.0625 28.5 C28.78937099 30.37122685 29.51658161 32.24232181 30.24414062 34.11328125 C33.20182233 41.72797644 36.14416675 49.34643268 39 57 C45.4414066 41.43405193 51.67471395 25.81753336 57.55786133 10.0324707 C57.99509521 8.86417725 58.4323291 7.69588379 58.8828125 6.4921875 C59.46119873 4.93540283 59.46119873 4.93540283 60.05126953 3.34716797 C61 1 61 1 62 0 C64.69654854 -0.07319621 67.36691458 -0.09242537 70.0625 -0.0625 C70.82111328 -0.05798828 71.57972656 -0.05347656 72.36132812 -0.04882812 C74.24091871 -0.0370068 76.12046899 -0.01907078 78 0 C75.9827336 6.31600722 73.68105196 12.46058839 71.15625 18.58984375 C70.60721512 19.93203728 70.60721512 19.93203728 70.04708862 21.30134583 C68.86781931 24.18134353 67.68410862 27.05948898 66.5 29.9375 C65.68822726 31.91630565 64.87654143 33.89514695 64.06494141 35.87402344 C58.14435771 50.29274192 52.1367609 64.67187983 46 79 C41.38 79 36.76 79 32 79 C23.94758714 59.98070572 15.93276996 40.94598633 8.06982422 21.84744263 C7.35650502 20.11556401 6.6419861 18.38417905 5.92626953 16.65328979 C4.92641708 14.23386245 3.9312423 11.81256724 2.9375 9.390625 C2.63827637 8.66841263 2.33905273 7.94620026 2.03076172 7.20210266 C0 2.22922021 0 2.22922021 0 0 Z '
        fill='#134D93'
        transform='translate(272,793)'
      />
    </Svg>
  );
}

export default Logo;
