
		var app = new Vue({
		  el: '#app',
		  mounted() {
			this.text()
		  },
		  data: {
			message: 'Hello Vue!',
			day_min: '1922-01-01',
			day_max: '2021-01-12',
			date_selected: '',
			day:   '',
			month: '',
			year:  '',
			result_nahual: '',
			result_aux_1: '',
			data_1: [
				{'year':1922, 'n1':167, 'n2':12},
				{'year':1923, 'n1':12,  'n2':117},
				{'year':1924, 'n1':117, 'n2':223},
				{'year':1925, 'n1':223, 'n2':68},
				{'year':1926, 'n1':68,  'n2':173},
				{'year':1927, 'n1':173, 'n2':18},
				{'year':1928, 'n1':18,  'n2':124},
				{'year':1929, 'n1':124, 'n2':229},
				{'year':1930, 'n1':229, 'n2':74},
				{'year':1931, 'n1':74,  'n2':179},
				{'year':1932, 'n1':179, 'n2':25},
				{'year':1933, 'n1':25,  'n2':130},
				{'year':1934, 'n1':130, 'n2':235},
				{'year':1935, 'n1':235, 'n2':80},
				{'year':1936, 'n1':80,  'n2':186},
				{'year':1937, 'n1':186, 'n2':31},
				{'year':1938, 'n1':31,  'n2':136},
				{'year':1939, 'n1':136, 'n2':241},
				{'year':1940, 'n1':241, 'n2':87},
				{'year':1941, 'n1':87,  'n2':192},
				{'year':1942, 'n1':192, 'n2':37},
				{'year':1943, 'n1':37,  'n2':142},
				{'year':1944, 'n1':142, 'n2':248},
				{'year':1945, 'n1':248, 'n2':93},
				{'year':1946, 'n1':93,  'n2':198},
				{'year':1947, 'n1':198, 'n2':43},
				{'year':1948, 'n1':43,  'n2':149},
				{'year':1949, 'n1':149, 'n2':254},
				{'year':1950, 'n1':254, 'n2':99},
				{'year':1951, 'n1':99,  'n2':204},
				{'year':1952, 'n1':204, 'n2':50},
				{'year':1953, 'n1':50,  'n2':155},
				{'year':1954, 'n1':155, 'n2':260},
				{'year':1955, 'n1':260, 'n2':105},
				{'year':1956, 'n1':105, 'n2':211},
				{'year':1957, 'n1':211, 'n2':56},
				{'year':1958, 'n1':56,  'n2':161},
				{'year':1959, 'n1':161, 'n2':6},
				{'year':1960, 'n1':6,   'n2':112},
				{'year':1961, 'n1':112, 'n2':217},
				{'year':1962, 'n1':217, 'n2':62},
				{'year':1963, 'n1':62,  'n2':167},
				{'year':1964, 'n1':167, 'n2':13},
				{'year':1965, 'n1':13,  'n2':118},
				{'year':1966, 'n1':118, 'n2':223},
				{'year':1967, 'n1':223, 'n2':68},
				{'year':1968, 'n1':68,  'n2':174},
				{'year':1969, 'n1':174, 'n2':19},
				{'year':1970, 'n1':19,  'n2':124},
				{'year':1971, 'n1':124, 'n2':229},
				{'year':1972, 'n1':229, 'n2':75},
				{'year':1973, 'n1':75,  'n2':180},
				{'year':1974, 'n1':180, 'n2':25},
				{'year':1975, 'n1':14,  'n2':130},
				{'year':1976, 'n1':130, 'n2':236},
				{'year':1977, 'n1':236, 'n2':81},
				{'year':1978, 'n1':81,  'n2':186},
				{'year':1979, 'n1':186, 'n2':31},
				{'year':1980, 'n1':31,  'n2':137},
				{'year':1981, 'n1':137, 'n2':242},
				{'year':1982, 'n1':242, 'n2':87},
				{'year':1983, 'n1':87,  'n2':192},
				{'year':1984, 'n1':192, 'n2':38},
				{'year':1985, 'n1':38,  'n2':143},
				{'year':1986, 'n1':143, 'n2':248},
				{'year':1987, 'n1':248, 'n2':93},
				{'year':1988, 'n1':93,  'n2':199},
				{'year':1989, 'n1':199, 'n2':44},
				{'year':1990, 'n1':44,  'n2':149},
				{'year':1991, 'n1':149, 'n2':254},
				{'year':1992, 'n1':254, 'n2':100},
				{'year':1993, 'n1':100, 'n2':205},
				{'year':1994, 'n1':205, 'n2':50},
				{'year':1995, 'n1':50,  'n2':155},
				{'year':1996, 'n1':155, 'n2':1},
				{'year':1997, 'n1':1,   'n2':106},
				{'year':1998, 'n1':106, 'n2':211},
				{'year':1999, 'n1':211, 'n2':56},
				{'year':2000, 'n1':56,  'n2':162},
				{'year':2001, 'n1':162, 'n2':7},
				{'year':2002, 'n1':7,   'n2':112},
				{'year':2003, 'n1':112, 'n2':217},
				{'year':2004, 'n1':217, 'n2':63},
				{'year':2005, 'n1':63,  'n2':168},
				{'year':2006, 'n1':168, 'n2':13},
				{'year':2007, 'n1':13,  'n2':118},
				{'year':2008, 'n1':118, 'n2':224},
				{'year':2009, 'n1':224, 'n2':69},
				{'year':2010, 'n1':69,  'n2':174},
				{'year':2011, 'n1':174, 'n2':19},
				{'year':2012, 'n1':19,  'n2':125},
				{'year':2013, 'n1':125, 'n2':230},
				{'year':2014, 'n1':230, 'n2':75},
				{'year':2015, 'n1':75,  'n2':180},
				{'year':2016, 'n1':180, 'n2':26},
				{'year':2017, 'n1':26,  'n2':131},
				{'year':2018, 'n1':131, 'n2':236},
				{'year':2019, 'n1':236, 'n2':81},
				{'year':2020, 'n1':81,  'n2':187},
				{'year':2021, 'n1':187, 'n2':32},
				{'year':2022, 'n1':32,  'n2':137},
				{'year':2023, 'n1':137, 'n2':242},
				{'year':2024, 'n1':242, 'n2':88},
				{'year':2025, 'n1':88,  'n2':193},
			],
			data_2: [
				{'day':1,  'jan':46, 'feb':77,  'mar':0,  'apr':31, 'may':61, 'jun':92,  'jul':122, 'ago':153, 'sep':184, 'oct':214, 'nov':245, 'dic':15},
				{'day':2,  'jan':47, 'feb':78,  'mar':1,  'apr':32, 'may':62, 'jun':93,  'jul':123, 'ago':154, 'sep':185, 'oct':215, 'nov':246, 'dic':16},
				{'day':3,  'jan':48, 'feb':79,  'mar':2,  'apr':33, 'may':63, 'jun':94,  'jul':124, 'ago':155, 'sep':186, 'oct':216, 'nov':247, 'dic':17},
				{'day':4,  'jan':49, 'feb':80,  'mar':3,  'apr':34, 'may':64, 'jun':95,  'jul':125, 'ago':156, 'sep':187, 'oct':217, 'nov':248, 'dic':18},
				{'day':5,  'jan':50, 'feb':81,  'mar':4,  'apr':35, 'may':65, 'jun':96,  'jul':126, 'ago':157, 'sep':188, 'oct':218, 'nov':249, 'dic':19},
				{'day':6,  'jan':51, 'feb':82,  'mar':5,  'apr':36, 'may':66, 'jun':97,  'jul':127, 'ago':158, 'sep':189, 'oct':219, 'nov':250, 'dic':20},
				{'day':7,  'jan':52, 'feb':83,  'mar':6,  'apr':37, 'may':67, 'jun':98,  'jul':128, 'ago':159, 'sep':190, 'oct':220, 'nov':251, 'dic':21},
				{'day':8,  'jan':53, 'feb':84,  'mar':7,  'apr':38, 'may':68, 'jun':99,  'jul':129, 'ago':160, 'sep':191, 'oct':221, 'nov':252, 'dic':22},
				{'day':9,  'jan':54, 'feb':85,  'mar':8,  'apr':39, 'may':69, 'jun':100, 'jul':130, 'ago':161, 'sep':192, 'oct':222, 'nov':253, 'dic':23},
				{'day':10, 'jan':55, 'feb':86,  'mar':9,  'apr':40, 'may':70, 'jun':101, 'jul':131, 'ago':162, 'sep':193, 'oct':223, 'nov':254, 'dic':24},
				{'day':11, 'jan':56, 'feb':87,  'mar':10, 'apr':41, 'may':71, 'jun':102, 'jul':132, 'ago':163, 'sep':194, 'oct':224, 'nov':255, 'dic':25},
				{'day':12, 'jan':57, 'feb':88,  'mar':11, 'apr':42, 'may':72, 'jun':103, 'jul':133, 'ago':164, 'sep':195, 'oct':225, 'nov':256, 'dic':26},
				{'day':13, 'jan':58, 'feb':89,  'mar':12, 'apr':43, 'may':73, 'jun':104, 'jul':134, 'ago':165, 'sep':196, 'oct':226, 'nov':257, 'dic':27},
				{'day':14, 'jan':59, 'feb':90,  'mar':13, 'apr':44, 'may':74, 'jun':105, 'jul':135, 'ago':166, 'sep':197, 'oct':227, 'nov':258, 'dic':28},
				{'day':15, 'jan':60, 'feb':91,  'mar':14, 'apr':45, 'may':75, 'jun':106, 'jul':136, 'ago':167, 'sep':198, 'oct':228, 'nov':259, 'dic':29},
				{'day':16, 'jan':61, 'feb':92,  'mar':15, 'apr':46, 'may':76, 'jun':107, 'jul':137, 'ago':168, 'sep':199, 'oct':229, 'nov':260, 'dic':30},
				{'day':17, 'jan':62, 'feb':93,  'mar':16, 'apr':47, 'may':77, 'jun':108, 'jul':138, 'ago':169, 'sep':200, 'oct':230, 'nov':1,   'dic':31},
				{'day':18, 'jan':63, 'feb':94,  'mar':17, 'apr':48, 'may':78, 'jun':109, 'jul':139, 'ago':170, 'sep':201, 'oct':231, 'nov':2,   'dic':32},
				{'day':19, 'jan':64, 'feb':95,  'mar':18, 'apr':49, 'may':79, 'jun':110, 'jul':140, 'ago':171, 'sep':202, 'oct':232, 'nov':3,   'dic':33},
				{'day':20, 'jan':65, 'feb':96,  'mar':19, 'apr':50, 'may':80, 'jun':111, 'jul':141, 'ago':172, 'sep':203, 'oct':233, 'nov':4,   'dic':34},
				{'day':21, 'jan':66, 'feb':97,  'mar':20, 'apr':51, 'may':81, 'jun':112, 'jul':142, 'ago':173, 'sep':204, 'oct':234, 'nov':5,   'dic':35},
				{'day':22, 'jan':67, 'feb':98,  'mar':21, 'apr':52, 'may':82, 'jun':113, 'jul':143, 'ago':174, 'sep':205, 'oct':235, 'nov':6,   'dic':36},
				{'day':23, 'jan':68, 'feb':99,  'mar':22, 'apr':53, 'may':83, 'jun':114, 'jul':144, 'ago':175, 'sep':206, 'oct':236, 'nov':7,   'dic':37},
				{'day':24, 'jan':69, 'feb':100, 'mar':23, 'apr':54, 'may':84, 'jun':115, 'jul':145, 'ago':176, 'sep':207, 'oct':237, 'nov':8,   'dic':38},
				{'day':25, 'jan':70, 'feb':101, 'mar':24, 'apr':55, 'may':85, 'jun':116, 'jul':146, 'ago':177, 'sep':208, 'oct':238, 'nov':9,   'dic':39},
				{'day':26, 'jan':71, 'feb':102, 'mar':25, 'apr':56, 'may':86, 'jun':117, 'jul':147, 'ago':178, 'sep':209, 'oct':239, 'nov':10,  'dic':40},
				{'day':27, 'jan':72, 'feb':103, 'mar':26, 'apr':57, 'may':87, 'jun':118, 'jul':148, 'ago':179, 'sep':210, 'oct':240, 'nov':11,  'dic':41},
				{'day':28, 'jan':73, 'feb':104, 'mar':27, 'apr':58, 'may':88, 'jun':119, 'jul':149, 'ago':180, 'sep':211, 'oct':241, 'nov':12,  'dic':42},
				{'day':29, 'jan':74, 'feb':105, 'mar':28, 'apr':59, 'may':89, 'jun':120, 'jul':150, 'ago':181, 'sep':212, 'oct':242, 'nov':13,  'dic':43},
				{'day':30, 'jan':75, 'feb':null,'mar':29, 'apr':60, 'may':90, 'jun':121, 'jul':151, 'ago':182, 'sep':213, 'oct':243, 'nov':14,  'dic':44},
				{'day':31, 'jan':76, 'feb':null,'mar':30,'apr':null,'may':91, 'jun':null,'jul':152, 'ago':183, 'sep':null,'oct':244, 'nov':null,'dic':45},
			],
			data_3:[
				{"second_number":1,  "aux_1":1,  "nahual":"Imox"},
				{"second_number":2,  "aux_1":2,  "nahual":"Iq'"},
				{"second_number":3,  "aux_1":3,  "nahual":"Aq'ab'al"},
				{"second_number":4,  "aux_1":4,  "nahual":"K'at"},
				{"second_number":5,  "aux_1":5,  "nahual":"Kan"},
				{"second_number":6,  "aux_1":6,  "nahual":"Kame"},
				{"second_number":7,  "aux_1":7,  "nahual":"Kej"},
				{"second_number":8,  "aux_1":8,  "nahual":"Q'anil"},
				{"second_number":9,  "aux_1":9,  "nahual":"Toj"},
				{"second_number":10, "aux_1":10, "nahual":"T'z'i"},
				{"second_number":11, "aux_1":11, "nahual":"B'atz'"},
				{"second_number":12, "aux_1":12, "nahual":"E"},
				{"second_number":13, "aux_1":13, "nahual":"Aj"},
				{"second_number":14, "aux_1":1, "nahual":"I'x"},
				{"second_number":15, "aux_1":2, "nahual":"Tzi'kin"},
				{"second_number":16, "aux_1":3, "nahual":"Ajmaq"},
				{"second_number":17, "aux_1":4, "nahual":"No'j"},
				{"second_number":18, "aux_1":5, "nahual":"Tijax"},
				{"second_number":19, "aux_1":6, "nahual":"Kawoq"},
				{"second_number":20, "aux_1":7, "nahual":"Ajpu"},
				
				{"second_number":21,  "aux_1":8,  "nahual":"Imox"},
				{"second_number":22,  "aux_1":9,  "nahual":"Iq'"},
				{"second_number":23,  "aux_1":10,  "nahual":"Aq'ab'al"},
				{"second_number":24,  "aux_1":11,  "nahual":"K'at"},
				{"second_number":25,  "aux_1":12,  "nahual":"Kan"},
				{"second_number":26,  "aux_1":13,  "nahual":"Kame"},
				{"second_number":27,  "aux_1":1,  "nahual":"Kej"},
				{"second_number":28,  "aux_1":2,  "nahual":"Q'anil"},
				{"second_number":29,  "aux_1":3,  "nahual":"Toj"},
				{"second_number":30, "aux_1":4, "nahual":"T'z'i"},
				{"second_number":31, "aux_1":5, "nahual":"B'atz'"},
				{"second_number":32, "aux_1":6, "nahual":"E"},
				{"second_number":33, "aux_1":7, "nahual":"Aj"},
				{"second_number":34, "aux_1":8, "nahual":"I'x"},
				{"second_number":35, "aux_1":9, "nahual":"Tzi'kin"},
				{"second_number":36, "aux_1":10, "nahual":"Ajmaq"},
				{"second_number":37, "aux_1":11, "nahual":"No'j"},
				{"second_number":38, "aux_1":12, "nahual":"Tijax"},
				{"second_number":39, "aux_1":13, "nahual":"Kawoq"},
				{"second_number":40, "aux_1":1, "nahual":"Ajpu"},
				
				{"second_number":41,  "aux_1":2,  "nahual":"Imox"},
				{"second_number":42,  "aux_1":3,  "nahual":"Iq'"},
				{"second_number":43,  "aux_1":4,  "nahual":"Aq'ab'al"},
				{"second_number":44,  "aux_1":5,  "nahual":"K'at"},
				{"second_number":45,  "aux_1":6,  "nahual":"Kan"},
				{"second_number":46,  "aux_1":7,  "nahual":"Kame"},
				{"second_number":47,  "aux_1":8,  "nahual":"Kej"},
				{"second_number":48,  "aux_1":9,  "nahual":"Q'anil"},
				{"second_number":49,  "aux_1":10,  "nahual":"Toj"},
				{"second_number":50, "aux_1":11, "nahual":"T'z'i"},
				{"second_number":51, "aux_1":12, "nahual":"B'atz'"},
				{"second_number":52, "aux_1":13, "nahual":"E"},
				{"second_number":53, "aux_1":1, "nahual":"Aj"},
				{"second_number":54, "aux_1":2, "nahual":"I'x"},
				{"second_number":55, "aux_1":3, "nahual":"Tzi'kin"},
				{"second_number":56, "aux_1":4, "nahual":"Ajmaq"},
				{"second_number":57, "aux_1":5, "nahual":"No'j"},
				{"second_number":58, "aux_1":6, "nahual":"Tijax"},
				{"second_number":59, "aux_1":7, "nahual":"Kawoq"},
				{"second_number":60, "aux_1":8, "nahual":"Ajpu"},
				
				{"second_number":61,  "aux_1":9,  "nahual":"Imox"},
				{"second_number":62,  "aux_1":10,  "nahual":"Iq'"},
				{"second_number":63,  "aux_1":11,  "nahual":"Aq'ab'al"},
				{"second_number":64,  "aux_1":12,  "nahual":"K'at"},
				{"second_number":65,  "aux_1":13,  "nahual":"Kan"},
				{"second_number":66,  "aux_1":1,  "nahual":"Kame"},
				{"second_number":67,  "aux_1":2,  "nahual":"Kej"},
				{"second_number":68,  "aux_1":3,  "nahual":"Q'anil"},
				{"second_number":69,  "aux_1":4,  "nahual":"Toj"},
				{"second_number":70, "aux_1":5, "nahual":"T'z'i"},
				{"second_number":71, "aux_1":6, "nahual":"B'atz'"},
				{"second_number":72, "aux_1":7, "nahual":"E"},
				{"second_number":73, "aux_1":8, "nahual":"Aj"},
				{"second_number":74, "aux_1":9, "nahual":"I'x"},
				{"second_number":75, "aux_1":10, "nahual":"Tzi'kin"},
				{"second_number":76, "aux_1":11, "nahual":"Ajmaq"},
				{"second_number":77, "aux_1":12, "nahual":"No'j"},
				{"second_number":78, "aux_1":13, "nahual":"Tijax"},
				{"second_number":79, "aux_1":1, "nahual":"Kawoq"},
				{"second_number":80, "aux_1":2, "nahual":"Ajpu"},
				
				{"second_number":81,  "aux_1":3,  "nahual":"Imox"},
				{"second_number":82,  "aux_1":4,  "nahual":"Iq'"},
				{"second_number":83,  "aux_1":5,  "nahual":"Aq'ab'al"},
				{"second_number":84,  "aux_1":6,  "nahual":"K'at"},
				{"second_number":85,  "aux_1":7,  "nahual":"Kan"},
				{"second_number":86,  "aux_1":8,  "nahual":"Kame"},
				{"second_number":87,  "aux_1":9,  "nahual":"Kej"},
				{"second_number":88,  "aux_1":10, "nahual":"Q'anil"},
				{"second_number":89,  "aux_1":11, "nahual":"Toj"},
				{"second_number":90,  "aux_1":12, "nahual":"T'z'i"},
				{"second_number":91, "aux_1":13, "nahual":"B'atz'"},
				{"second_number":92, "aux_1":1, "nahual":"E"},
				{"second_number":93, "aux_1":2, "nahual":"Aj"},
				{"second_number":94, "aux_1":3, "nahual":"I'x"},
				{"second_number":95, "aux_1":4, "nahual":"Tzi'kin"},
				{"second_number":96, "aux_1":5, "nahual":"Ajmaq"},
				{"second_number":97, "aux_1":6, "nahual":"No'j"},
				{"second_number":98, "aux_1":7, "nahual":"Tijax"},
				{"second_number":99, "aux_1":8, "nahual":"Kawoq"},
				{"second_number":100, "aux_1":9, "nahual":"Ajpu"},
				
				{"second_number":101,  "aux_1":10,  "nahual":"Imox"},
				{"second_number":102,  "aux_1":11,  "nahual":"Iq'"},
				{"second_number":103,  "aux_1":12,  "nahual":"Aq'ab'al"},
				{"second_number":104,  "aux_1":13,  "nahual":"K'at"},
				{"second_number":105,  "aux_1":1,  "nahual":"Kan"},
				{"second_number":106,  "aux_1":2,  "nahual":"Kame"},
				{"second_number":107,  "aux_1":3,  "nahual":"Kej"},
				{"second_number":108,  "aux_1":4,  "nahual":"Q'anil"},
				{"second_number":109,  "aux_1":5,  "nahual":"Toj"},
				{"second_number":110, "aux_1":6, "nahual":"T'z'i"},
				{"second_number":111, "aux_1":7, "nahual":"B'atz'"},
				{"second_number":112, "aux_1":8, "nahual":"E"},
				{"second_number":113, "aux_1":9, "nahual":"Aj"},
				{"second_number":114, "aux_1":10, "nahual":"I'x"},
				{"second_number":115, "aux_1":11, "nahual":"Tzi'kin"},
				{"second_number":116, "aux_1":12, "nahual":"Ajmaq"},
				{"second_number":117, "aux_1":13, "nahual":"No'j"},
				{"second_number":118, "aux_1":1, "nahual":"Tijax"},
				{"second_number":119, "aux_1":2, "nahual":"Kawoq"},
				{"second_number":120, "aux_1":3, "nahual":"Ajpu"},
				
				{"second_number":121,  "aux_1":4,  "nahual":"Imox"},
				{"second_number":122,  "aux_1":5,  "nahual":"Iq'"},
				{"second_number":123,  "aux_1":6,  "nahual":"Aq'ab'al"},
				{"second_number":124,  "aux_1":7,  "nahual":"K'at"},
				{"second_number":125,  "aux_1":8,  "nahual":"Kan"},
				{"second_number":126,  "aux_1":9,  "nahual":"Kame"},
				{"second_number":127,  "aux_1":10,  "nahual":"Kej"},
				{"second_number":128,  "aux_1":11,  "nahual":"Q'anil"},
				{"second_number":129,  "aux_1":12,  "nahual":"Toj"},
				{"second_number":130, "aux_1":13, "nahual":"T'z'i"},
				{"second_number":131, "aux_1":1, "nahual":"B'atz'"},
				{"second_number":132, "aux_1":2, "nahual":"E"},
				{"second_number":133, "aux_1":3, "nahual":"Aj"},
				{"second_number":134, "aux_1":4, "nahual":"I'x"},
				{"second_number":135, "aux_1":5, "nahual":"Tzi'kin"},
				{"second_number":136, "aux_1":6, "nahual":"Ajmaq"},
				{"second_number":137, "aux_1":7, "nahual":"No'j"},
				{"second_number":138, "aux_1":8, "nahual":"Tijax"},
				{"second_number":139, "aux_1":9, "nahual":"Kawoq"},
				{"second_number":140, "aux_1":10, "nahual":"Ajpu"},
				
				{"second_number":141,  "aux_1":11,  "nahual":"Imox"},
				{"second_number":142,  "aux_1":12,  "nahual":"Iq'"},
				{"second_number":143,  "aux_1":13,  "nahual":"Aq'ab'al"},
				{"second_number":144,  "aux_1":1,  "nahual":"K'at"},
				{"second_number":145,  "aux_1":2,  "nahual":"Kan"},
				{"second_number":146,  "aux_1":3,  "nahual":"Kame"},
				{"second_number":147,  "aux_1":4,  "nahual":"Kej"},
				{"second_number":148,  "aux_1":5,  "nahual":"Q'anil"},
				{"second_number":149,  "aux_1":6,  "nahual":"Toj"},
				{"second_number":150, "aux_1":7, "nahual":"T'z'i"},
				{"second_number":151, "aux_1":8, "nahual":"B'atz'"},
				{"second_number":152, "aux_1":9, "nahual":"E"},
				{"second_number":153, "aux_1":10, "nahual":"Aj"},
				{"second_number":154, "aux_1":11, "nahual":"I'x"},
				{"second_number":155, "aux_1":12, "nahual":"Tzi'kin"},
				{"second_number":156, "aux_1":13, "nahual":"Ajmaq"},
				{"second_number":157, "aux_1":1, "nahual":"No'j"},
				{"second_number":158, "aux_1":2, "nahual":"Tijax"},
				{"second_number":159, "aux_1":3, "nahual":"Kawoq"},
				{"second_number":160, "aux_1":4, "nahual":"Ajpu"},
			
				{"second_number":161,  "aux_1":5,  "nahual":"Imox"},
				{"second_number":162,  "aux_1":6,  "nahual":"Iq'"},
				{"second_number":163,  "aux_1":7,  "nahual":"Aq'ab'al"},
				{"second_number":164,  "aux_1":8,  "nahual":"K'at"},
				{"second_number":165,  "aux_1":9,  "nahual":"Kan"},
				{"second_number":166,  "aux_1":10,  "nahual":"Kame"},
				{"second_number":167,  "aux_1":11,  "nahual":"Kej"},
				{"second_number":168,  "aux_1":12,  "nahual":"Q'anil"},
				{"second_number":169,  "aux_1":13,  "nahual":"Toj"},
				{"second_number":170, "aux_1":1, "nahual":"T'z'i"},
				{"second_number":171, "aux_1":2, "nahual":"B'atz'"},
				{"second_number":172, "aux_1":3, "nahual":"E"},
				{"second_number":173, "aux_1":4, "nahual":"Aj"},
				{"second_number":174, "aux_1":5, "nahual":"I'x"},
				{"second_number":175, "aux_1":6, "nahual":"Tzi'kin"},
				{"second_number":176, "aux_1":7, "nahual":"Ajmaq"},
				{"second_number":177, "aux_1":8, "nahual":"No'j"},
				{"second_number":178, "aux_1":9, "nahual":"Tijax"},
				{"second_number":179, "aux_1":10, "nahual":"Kawoq"},
				{"second_number":180, "aux_1":11, "nahual":"Ajpu"},
				
				{"second_number":181,  "aux_1":12,  "nahual":"Imox"},
				{"second_number":182,  "aux_1":13,  "nahual":"Iq'"},
				{"second_number":183,  "aux_1":1,  "nahual":"Aq'ab'al"},
				{"second_number":184,  "aux_1":2,  "nahual":"K'at"},
				{"second_number":185,  "aux_1":3,  "nahual":"Kan"},
				{"second_number":186,  "aux_1":4,  "nahual":"Kame"},
				{"second_number":187,  "aux_1":5,  "nahual":"Kej"},
				{"second_number":188,  "aux_1":6,  "nahual":"Q'anil"},
				{"second_number":189,  "aux_1":7,  "nahual":"Toj"},
				{"second_number":190, "aux_1":8, "nahual":"T'z'i"},
				{"second_number":191, "aux_1":9, "nahual":"B'atz'"},
				{"second_number":192, "aux_1":10, "nahual":"E"},
				{"second_number":193, "aux_1":11, "nahual":"Aj"},
				{"second_number":194, "aux_1":12, "nahual":"I'x"},
				{"second_number":195, "aux_1":13, "nahual":"Tzi'kin"},
				{"second_number":196, "aux_1":1, "nahual":"Ajmaq"},
				{"second_number":197, "aux_1":2, "nahual":"No'j"},
				{"second_number":198, "aux_1":3, "nahual":"Tijax"},
				{"second_number":199, "aux_1":4, "nahual":"Kawoq"},
				{"second_number":200, "aux_1":5, "nahual":"Ajpu"},
				
				{"second_number":201,  "aux_1":6,  "nahual":"Imox"},
				{"second_number":202,  "aux_1":7,  "nahual":"Iq'"},
				{"second_number":203,  "aux_1":8,  "nahual":"Aq'ab'al"},
				{"second_number":204,  "aux_1":9,  "nahual":"K'at"},
				{"second_number":205,  "aux_1":10,  "nahual":"Kan"},
				{"second_number":206,  "aux_1":11,  "nahual":"Kame"},
				{"second_number":207,  "aux_1":12,  "nahual":"Kej"},
				{"second_number":208,  "aux_1":13,  "nahual":"Q'anil"},
				{"second_number":209,  "aux_1":1,  "nahual":"Toj"},
				{"second_number":210, "aux_1":2, "nahual":"T'z'i"},
				{"second_number":211, "aux_1":3, "nahual":"B'atz'"},
				{"second_number":212, "aux_1":4, "nahual":"E"},
				{"second_number":213, "aux_1":5, "nahual":"Aj"},
				{"second_number":214, "aux_1":6, "nahual":"I'x"},
				{"second_number":215, "aux_1":7, "nahual":"Tzi'kin"},
				{"second_number":216, "aux_1":8, "nahual":"Ajmaq"},
				{"second_number":217, "aux_1":9, "nahual":"No'j"},
				{"second_number":218, "aux_1":10, "nahual":"Tijax"},
				{"second_number":219, "aux_1":11, "nahual":"Kawoq"},
				{"second_number":220, "aux_1":12, "nahual":"Ajpu"},
				
				{"second_number":221,  "aux_1":13,  "nahual":"Imox"},
				{"second_number":222,  "aux_1":1,  "nahual":"Iq'"},
				{"second_number":223,  "aux_1":2,  "nahual":"Aq'ab'al"},
				{"second_number":224,  "aux_1":3,  "nahual":"K'at"},
				{"second_number":225,  "aux_1":4,  "nahual":"Kan"},
				{"second_number":226,  "aux_1":5,  "nahual":"Kame"},
				{"second_number":227,  "aux_1":6,  "nahual":"Kej"},
				{"second_number":228,  "aux_1":7,  "nahual":"Q'anil"},
				{"second_number":229,  "aux_1":8,  "nahual":"Toj"},
				{"second_number":230, "aux_1":9, "nahual":"T'z'i"},
				{"second_number":231, "aux_1":10, "nahual":"B'atz'"},
				{"second_number":232, "aux_1":11, "nahual":"E"},
				{"second_number":233, "aux_1":12, "nahual":"Aj"},
				{"second_number":234, "aux_1":13, "nahual":"I'x"},
				{"second_number":235, "aux_1":1, "nahual":"Tzi'kin"},
				{"second_number":236, "aux_1":2, "nahual":"Ajmaq"},
				{"second_number":237, "aux_1":3, "nahual":"No'j"},
				{"second_number":238, "aux_1":4, "nahual":"Tijax"},
				{"second_number":239, "aux_1":5, "nahual":"Kawoq"},
				{"second_number":240, "aux_1":6, "nahual":"Ajpu"},
			
				{"second_number":241,  "aux_1":7,  "nahual":"Imox"},
				{"second_number":242,  "aux_1":8,  "nahual":"Iq'"},
				{"second_number":243,  "aux_1":9,  "nahual":"Aq'ab'al"},
				{"second_number":244,  "aux_1":10,  "nahual":"K'at"},
				{"second_number":245,  "aux_1":11,  "nahual":"Kan"},
				{"second_number":246,  "aux_1":12,  "nahual":"Kame"},
				{"second_number":247,  "aux_1":13,  "nahual":"Kej"},
				{"second_number":248,  "aux_1":1,  "nahual":"Q'anil"},
				{"second_number":249,  "aux_1":2,  "nahual":"Toj"},
				{"second_number":250, "aux_1":3, "nahual":"T'z'i"},
				{"second_number":251, "aux_1":4, "nahual":"B'atz'"},
				{"second_number":252, "aux_1":5, "nahual":"E"},
				{"second_number":253, "aux_1":6, "nahual":"Aj"},
				{"second_number":254, "aux_1":7, "nahual":"I'x"},
				{"second_number":255, "aux_1":8, "nahual":"Tzi'kin"},
				{"second_number":256, "aux_1":9, "nahual":"Ajmaq"},
				{"second_number":257, "aux_1":10, "nahual":"No'j"},
				{"second_number":258, "aux_1":11, "nahual":"Tijax"},
				{"second_number":259, "aux_1":12, "nahual":"Kawoq"},
				
			]
		  },
		  methods: { 
			watch: {
				date_selected: function(value) {
				  console.log(value)
				},
			},
			text(){
				this.message = this.validate_day(this.day, this.get_max_day(this.month, this.year)) 
				
				var num_1 = this.get_first_number(this.month, this.year, this.data_1)
				var num_2 = this.get_second_number(this.day, this.month, this.data_2)
				var total = num_1 + num_2
				console.log(num_1)
				console.log(num_2)
				if (total > 260){
					total = total - 260
				}
				
				console.log(total)
				console.log(this.get_third_number(total, this.data_3))
				this.message = this.get_third_number(total, this.data_3)
			},
			is_leap_year(year){
				return (((year%100)!=0)&&((year%4)==0))||((year%400)==0)
			},
			validate_day(day, month_max_day){
				return day >= 1 && day<=month_max_day
			},
			validate_month(month){
				return month>=1 && month<=12
			},
			get_max_day(month, year){
				if(month==2){
					return this.is_leap_year(year) ? 29 : 28
				}
				if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
					return 31
				}
				if(month==4 || month==6 || month==9 || month==11){
					return 30
				}
			},
			get_first_number(month, year, data){
				for(var i=0;i<data.length;i++){
					if(data[i].year==year && month>=1 && month<=2){
						return data[i].n1
					}
					if(data[i].year==year && month>=3 && month<=12){
						return data[i].n2
					}
				}
			},
			get_second_number(day, month, data){
				for(var i=0;i<data.length;i++){
					if(data[i].day==day){
						if(month==1){
							return data[i].jan
						}
						if(month==2){
							return data[i].feb
						}
						if(month==3){
							return data[i].mar
						}
						if(month==4){
							return data[i].apr
						}
						if(month==5){
							return data[i].may
						}
						if(month==6){
							return data[i].jun
						}
						if(month==7){
							return data[i].jul
						}
						if(month==8){
							return data[i].ago
						}
						if(month==9){
							return data[i].sep
						}
						if(month==10){
							return data[i].oct
						}
						if(month==11){
							return data[i].nov
						}
						if(month==12){
							return data[i].dic
						}
					}
				}
			},
			get_third_number(number, data){
				var result = ''
				for(var i=0;i<data.length;i++){
					if(data[i].second_number == number){
						result = data[i].nahual
						this.result_nahual = data[i].nahual 
						this.result_aux_1 = data[i].aux_1
					}
				}
				return result
			}
		  }
		})
