function abc(a) {

  //numbers
  a = a.replace(/1/gm, '១');
  a = a.replace(/2/gm, '២');
  a = a.replace(/3/gm, '៣');
  a = a.replace(/4/gm, '៤');
  a = a.replace(/5/gm, '៥');
  a = a.replace(/6/gm, '៦');
  a = a.replace(/7/gm, '៧');
  a = a.replace(/8/gm, '៨');
  a = a.replace(/9/gm, '៩');
  a = a.replace(/0/gm, '០');

  //consonants
  a = a.replace(/á/gm, 'បា');
  a = a.replace(/Á/gm, 'បៅ');
  a = a.replace(/BaØ/gm, 'ញ្ញ');
  a = a.replace(/k/gm, 'ក');
  a = a.replace(/x/gm, 'ខ');
  a = a.replace(/K/gm, 'គ');
  a = a.replace(/X/gm, 'ឃ');
  a = a.replace(/g/gm, 'ង');
  a = a.replace(/c/gm, 'ច');
  a = a.replace(/q/gm, 'ឆ');
  a = a.replace(/C/gm, 'ជ');
  a = a.replace(/Q/gm, 'ឈ');
  a = a.replace(/j/gm, 'ញ');
  a = a.replace(/d/gm, 'ដ');
  a = a.replace(/z/gm, 'ឋ');
  a = a.replace(/D/gm, 'ឌ');
  a = a.replace(/Z/gm, 'ឍ');
  a = a.replace(/N/gm, 'ណ');
  a = a.replace(/t/gm, 'ត');
  a = a.replace(/f/gm, 'ថ');
  a = a.replace(/T/gm, 'ទ');
  a = a.replace(/F/gm, 'ធ');
  a = a.replace(/n/gm, 'ន');
  a = a.replace(/b/gm, 'ប');
  a = a.replace(/p/gm, 'ផ');
  a = a.replace(/B/gm, 'ព');
  a = a.replace(/P/gm, 'ភ');
  a = a.replace(/m/gm, 'ម');
  a = a.replace(/y/gm, 'យ');
  a = a.replace(/r/gm, 'រ');
  a = a.replace(/l/gm, 'ល');
  a = a.replace(/v/gm, 'វ');
  a = a.replace(/s/gm, 'ស');
  a = a.replace(/h/gm, 'ហ');
  a = a.replace(/L/gm, 'ឡ');
  a = a.replace(/G/gm, 'អ');


  //subscripts
  a = a.replace(/;/gm, '្ក');
  a = a.replace(/ç/gm, '្ខ');
  a = a.replace(/:/gm, '្គ');
  a = a.replace(/Ç/gm, '្ខ');
  a = a.replace(/¶/gm, '្ង');
  a = a.replace(/©/gm, '្ច');
  a = a.replace(/ä/gm, '្ឆ');
  a = a.replace(/¢/gm, '្ជ');
  a = a.replace(/Ä/gm, '្ឈ');
  a = a.replace(/J/gm, '្ញ');
  a = a.replace(/þ/gm, '្ដ');
  a = a.replace(/æ/gm, '្ឋ');
  a = a.replace(/Ð/gm, '្ឌ');
  a = a.replace(/Æ/gm, '្ឍ');
  a = a.replace(/Ñ/gm, '្ណ');
  a = a.replace(/þ/gm, '្ត');
  a = a.replace(/S/gm, '្ថ');
  a = a.replace(/Þ/gm, '្ទ');
  a = a.replace(/§/gm, '្ធ');
  a = a.replace(/ñ/gm, '្ន');
  a = a.replace(/,/gm, '្ប');
  a = a.replace(/ö/gm, '្ផ');
  a = a.replace(/</gm, '្ព');
  a = a.replace(/Ö/gm, '្ភ');
  a = a.replace(/µ/gm, '្ម');
  a = a.replace(/ü/gm, '្យ');
  a = a.replace(/R/gm, '្រ');
  a = a.replace(/®/gm, '្រ');
  a = a.replace(/ø/gm, '្ល');
  a = a.replace(/V/gm, '្វ');
  a = a.replace(/ß/gm, '្ស');
  a = a.replace(/H/gm, '្ហ');
  a = a.replace(/ð/gm, '្អ');

  //taller subscripts
  a = a.replace(/ú/gm, 'ុ');
  a = a.replace(/Ú/gm, 'ូ');
  a = a.replace(/Ü/gm, 'ួ');
  a = a.replace(/í/gm, 'ិ');
  a = a.replace(/Í/gm, 'ី');
  a = a.replace(/å/gm, 'ឹ');
  a = a.replace(/Å/gm, 'ឺ');

  //some vowels
  a = a.replace(/a/gm, 'ា');
  a = a.replace(/i/gm, 'ិ');
  a = a.replace(/I/gm, 'ី');
  a = a.replace(/w/gm, 'ឹ');
  a = a.replace(/W/gm, 'ឺ');
  a = a.replace(/u/gm, 'ុ');
  a = a.replace(/U/gm, 'ូ');
  a = a.replace(/Y/gm, 'ួ');
  a = a.replace(/M/gm, 'ំ');
  a = a.replace(/¼/gm, 'ះ');

  //miscellaneous
  a = a.replace(/£/gm, 'ៈ');
  a = a.replace(/´/gm, '់');
  a = a.replace(/@/gm, 'ៗ');
  a = a.replace(/‘/gm, '៊');
  a = a.replace(/¨/gm, '៉');
  a = a.replace(/&/gm, '័');
  a = a.replace(/¾/gm, '៏');
  a = a.replace(/’/gm, '៌');
  a = a.replace(/\+/gm, '៎');
  a = a.replace(/_/gm, '៍');
  a = a.replace(/#/gm, 'ិ៍');
  a = a.replace(/>/gm, '៕');
  a = a.replace(/²/gm, '«');
  a = a.replace(/³/gm, '»');
  a = a.replace(/¿/gm, '.');
  a = a.replace(/\//gm, ',');
  a = a.replace(/-/gm, '_');
  a = a.replace(/¥/gm, '-');
  a = a.replace(/=/gm, '+');
  a = a.replace(/!/gm, '!');
  a = a.replace(/\$/gm, '៛');
  a = a.replace(/\./gm, '។');


  a = a.replace(/¬/gm, 'ឫ');
  a = a.replace(/¦/gm, 'ឬ');
  a = a.replace(/\\/gm, 'ឭ');
  a = a.replace(/\|/gm, 'ឮ');

  //independent vowels
  a = a.replace(/}/gm, 'ឥ');
  a = a.replace(/»/gm, 'ឦ');
  a = a.replace(/«/gm, 'ឧ');
  a = a.replace(/\]/gm, 'ឪ');
  a = a.replace(/É/gm, 'ឯ');
  a = a.replace(/{/gm, 'ឱ');
  a = a.replace(/\[/gm, 'ឱ្យ');


  a = a.replace(/e/gm, 'េ');
  a = a.replace(/O/gm, 'ឿ');
  a = a.replace(/o/gm, 'ៀ');
  a = a.replace(/E/gm, 'ែ');
  a = a.replace(/é/gm, 'ៃ');
  a = a.replace(/Ó/gm, 'ឿ');
  a = a.replace(/ó/gm, 'ៀ');
  a = a.replace(/A/gm, 'ៅ');

  //miscellaneous issues
  a = a.replace(/\u17D2\u179A(.)/gm, '$1្រ');
  a = a.replace(/\u17D2\u179A(\u17D2.)/gm, '$1្រ');
  a = a.replace(/\u17C1(.[\u17C0\u17BF])/gm, '$1'); //េ ៀឿ
  a = a.replace(/\u17C1(.\u17D2.[\u17C0\u17BF])/gm, '$1'); //េ ៀឿ
  a = a.replace(/\u17C1(.\u17D2.\u17D2.[\u17C0\u17BF])/gm, '$1'); //េ ៀឿ
  a = a.replace(/\u17C1(.[\u17C4\u17C5])/gm, '$1'); //េ  ោៅ
  a = a.replace(/\u17C1(.\u17D2.[\u17C4\u17C5])/gm, '$1'); //េ  ោៅ
  a = a.replace(/\u17C1(.\u17D2.\u17D2.[\u17C4\u17C5])/gm, '$1'); //េ  ោៅ
  a = a.replace(/\u17C1(.)\u17B6/gm, '$1ោ'); //េ  ា
  a = a.replace(/\u17C1(.\u17D2.)\u17B6/gm, '$1ោ'); //េ  ា
  a = a.replace(/\u17C1(.\u17D2.\u17D2.)\u17B6/gm, '$1ោ'); //េ  ា
  a = a.replace(/([\u17C2\u17C3])(.)/gm, '$2$1'); //ែៃ
  a = a.replace(/([\u17C2\u17C3])(\u17D2.)/gm, '$2$1'); //ែៃ
  a = a.replace(/([\u17C2\u17C3])(\u17D2.)/gm, '$2$1'); //ែៃ
  a = a.replace(/\u17C1(.)\u17B8/gm, '$1ើ');  //េ  ើ
  a = a.replace(/\u17C1(.\u17D2.)\u17B8/gm, '$1ើ');  //េ  ើ
  a = a.replace(/\u17C1(.\u17D2.\u17D2.)\u17B8/gm, '$1ើ');  //េ  ើ
  a = a.replace(/\)([\u17C4\u17C5])/gm, 'ប$1');  //េប ា       បោ បៅ
  a = a.replace(/\)(\u17D2.[\u17C4\u17C5])/gm, 'ប$1');  //េប ា       បោ បៅ
  a = a.replace(/\)(\u17D2.\u17D2.[\u17C4\u17C5])/gm, 'ប$1');  //េប ា       បោ បៅ
  a = a.replace(/\)(\u17B6)/gm, 'ប$1');  //ប ា     បា
  a = a.replace(/\)(\u17D2.\u17B6)/gm, 'ប$1');  //ប ា     បា
  a = a.replace(/\)(\u17D2.\u17D2.\u17B6)/gm, 'ប$1');  //ប ា     បា
  a = a.replace(/(\u17C1)(.)/gm, '$2$1');  //leftover េ
  a = a.replace(/(.)(\u17C1)(\u17D2.)/gm, '$1$3$2');
  a = a.replace(/(.)(\u17D2.)(\u17C1)(\u17D2.)/gm, '$1$2$4$3');
  a = a.replace(/\u17C6\u17BB/gm, 'ុំ');

  //treysap and rat's teeth
  var c = '\u1780\u1781\u1782\u1783\u1784\u1785\u1786\u1787\u1788\u1789\u178A\u178B\u178C\u178D\u1793\u178F\u1790\u1791\u1792\u178E\u1794\u1795\u1796\u1797\u1798\u1799\u179A\u179B\u179C\u179F\u17A0\u17A1\u17A2';
  var v = '\u17B6\u17B7\u17B8\u17B9\u17BA\u17BB\u17BC\u17BD\u17BE\u17BF\u17C0\u17C1\u17C2\u17C3\u17C4\u17C5\u17C6\u17C7';
  a = a.replace(new RegExp('([' + c + '](\u17D2[' + c + '])*)([' + v + '])*([\u17C9\u17CA])', 'gm'), '$1$4$3');  //៉ and ៊

  a = a.replace(/([យបរវ])ុ([ិីឹឺ])/gm, '$1៉$2');
  a = a.replace(/([សហអ])ុ([ិីឹឺ])/gm, '$1៊$2');

  //ខ្ញុំ
  //a = a.replace(/(\u1781)(\u17C6)(\u17D2\u1789)(\u17BB)/gm, '$1$3$4$2');

  return a;
}

module.exports = abc;