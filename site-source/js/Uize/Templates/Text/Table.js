/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Templates.Text.Table Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014-2016 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 1
	codeCompleteness: 100
	docCompleteness: 4
*/

/*?
	Introduction
		The =Uize.Templates.Text.Table= module is a JavaScript Template module, used for generating a text-based table layout of data that can be used when outputting to logs, consoles, terminals, etc.

		*DEVELOPERS:* `Chris van Rensburg`

		In a Nutshell
			The =Uize.Templates.Text.ProgressBar= module is a simple template module that can be useful in situations where you need to display a set of data in table format using purely text characters.

			For instance, you may wish to display a summary of results from a build script in table form in the console, or output such a table to a log file. There are several build scripts in the UIZE JavaScript Framework, for example, that make use of this template module to generate text tables for output to the console.

			To illustrate how this module is used, consider the following example of a text table that is being generated to display some price inflation data for the United Kingdom...

			EXAMPLE
			..........................................................................................
			Uize.Templates.Text.Table.process ({
				title:'Price Inflation in the United Kingdom',
				columns:[
					{title:'Description'},
					{
						title:'Price in 1973',
						align:'right',
						formatter:'value < 1 ? (value * 100).toFixed (0) + "p" : "£" + value.toFixed (2)'
					},
					{
						title:'Price in 2013',
						align:'right',
						formatter:'value < 1 ? (value * 100).toFixed (0) + "p" : "£" + value.toFixed (2)'
					},
					{
						title:'Price Increase',
						align:'right',
						formatter:'value + "%"'
					}
				],
				rows:[
					['Pint of lager',.14,2.87,1948],
					['Loaf of bread',.11,1.30,1082],
					['Apples, per kg',.28,2.02,622],
					['Pint of milk',.06,.46,667],
					['Sausages, per kg',.58,4.84,735],
					['Butter per 250g',.13,1.42,992],
					['Carrots, per kg',.11,.91,723],
					['Sugar, per kg',.11,.93,787],
					['Coffee, per 100g',.28,2.67,853],
					['Dozen eggs',.33,2.78,743],
					['Flour, per 1.5kg',.15,1.19,724],
					['Diesel, per litre',.08,1.41,1727],
					['Average detached house',16980,305391,1699],
					['Gold: troy ounce',34,1051,2952]
				]
			});
			..........................................................................................

			The above statement, when executed, will produce the following multi-line string as its output...

			OUTPUT
			...........................................................................
			+-------------------------------------------------------------------------+
			|                  Price Inflation in the United Kingdom                  |
			+-------------------------------------------------------------------------+
			|      Description       | Price in 1973 | Price in 2013 | Price Increase |
			|------------------------+---------------+---------------+----------------|
			| Pint of lager          |           14p |         £2.87 |          1948% |
			|------------------------+---------------+---------------+----------------|
			| Loaf of bread          |           11p |         £1.30 |          1082% |
			|------------------------+---------------+---------------+----------------|
			| Apples, per kg         |           28p |         £2.02 |           622% |
			|------------------------+---------------+---------------+----------------|
			| Pint of milk           |            6p |           46p |           667% |
			|------------------------+---------------+---------------+----------------|
			| Sausages, per kg       |           58p |         £4.84 |           735% |
			|------------------------+---------------+---------------+----------------|
			| Butter per 250g        |           13p |         £1.42 |           992% |
			|------------------------+---------------+---------------+----------------|
			| Carrots, per kg        |           11p |           91p |           723% |
			|------------------------+---------------+---------------+----------------|
			| Sugar, per kg          |           11p |           93p |           787% |
			|------------------------+---------------+---------------+----------------|
			| Coffee, per 100g       |           28p |         £2.67 |           853% |
			|------------------------+---------------+---------------+----------------|
			| Dozen eggs             |           33p |         £2.78 |           743% |
			|------------------------+---------------+---------------+----------------|
			| Flour, per 1.5kg       |           15p |         £1.19 |           724% |
			|------------------------+---------------+---------------+----------------|
			| Diesel, per litre      |            8p |         £1.41 |          1727% |
			|------------------------+---------------+---------------+----------------|
			| Average detached house |     £16980.00 |    £305391.00 |          1699% |
			|------------------------+---------------+---------------+----------------|
			| Gold: troy ounce       |        £34.00 |      £1051.00 |          2952% |
			+-------------------------------------------------------------------------+
			...........................................................................

			Table Data
				Table data is specified using the =rows= property of the input object passed to the =Uize.Templates.Text.ProgressBar.process= method.

				The value specified for the =rows= property should be an array of column arrays. That is to say, each value in the =rows= array should be a column array that contains values for each of the columns in the table. Therefore, each row array should have the same number of column value elements.

				EXAMPLE
				...........................................................................
				Uize.Templates.Text.Table.process ({
					columns:[
						{title:'Column 1'},
						{title:'Column 2'}
					],
					rows:[
						['foo','bar'],  // values for column 1 and column 2 of the first row
						['baz','qux']   // values for column 1 and column 2 of the second row
					]
				});
				...........................................................................

				In the above example, we are generating a text table with two rows and two columns. The first row contains the values ='foo'= and ='bar'= for the two columns, while the second row contains the values ='baz'= and ='qux'= for the two columns.

				OUTPUT
				.......................
				+---------------------+
				| Column 1 | Column 2 |
				|----------+----------|
				| foo      | bar      |
				|----------+----------|
				| baz      | qux      |
				+---------------------+
				.......................

			Table Title
				The =Uize.Templates.Text.ProgressBar= module allows a title to be specified in the =title= property of the input object passed to the =Uize.Templates.Text.ProgressBar.process= method.

				Title is Optional
					Text tables generated by the =Uize.Templates.Text.ProgressBar= module do not need to contain a title.

					A table without a table can be generated by specifying no =title= property in the input object, or by specifying the value =''= (empty string), =null=, or =undefined= for the =title= property.

					EXAMPLE
					....................................
					Uize.Templates.Text.Table.process ({
						columns:[
							{title:'Column 1'},
							{title:'Column 2'}
						],
						rows:[
							['foo','bar'],
							['baz','qux']
						]
					});
					....................................

					OUTPUT
					.......................
					+---------------------+
					| Column 1 | Column 2 |
					|----------+----------|
					| foo      | bar      |
					|----------+----------|
					| baz      | qux      |
					+---------------------+
					.......................

				Title is Center-aligned
					When a title is specified, it is always center-aligned in the generated text table.

					EXAMPLE
					....................................
					Uize.Templates.Text.Table.process ({
						title:'Foo Table',
						columns:[
							{title:'Column 1'},
							{title:'Column 2'}
						],
						rows:[
							['foo','bar'],
							['baz','qux']
						]
					});
					....................................

					OUTPUT
					.......................
					+---------------------+
					|      Foo Table      |
					+---------------------+
					| Column 1 | Column 2 |
					|----------+----------|
					| foo      | bar      |
					|----------+----------|
					| baz      | qux      |
					+---------------------+
					.......................

			Column Descriptions
				Columns are described for a table using the =columns= property of the input object passed to the =Uize.Templates.Text.ProgressBar.process= method.

				Column Description Object
					The value specified for the =columns= property should be an array, where each element is a column description object of the form...

					................................................................................................
					{
						title:titleSTR,                // the display title for the column (required)
						align:alignSTRorFLOAT,         // the alignment of values in the column (optional)
						formatter:formatterFUNCorSTR,  // a value transformer for formatting column values (optional)
						minValue:minValueNUM,          // the lower end of the column's value range (optional)
						maxValue:maxValueNUM           // the upper end of the column's value range (optional)
					}
					................................................................................................

				The various properties of the column description object are discussed in more detail in the following sections.

				Column Titles
					Titles are specified for columns using the =title= property of the `column description object`.

					Column titles are required, unlike other properties of the column description object. Column titles are always displayed center-aligned when the calculated `column width` is greater than the column title width.

					EXAMPLE
					.......................................................
					Uize.Templates.Text.Table.process ({
						title:'Foo Table',
						columns:[
							{title:'Column 1'},
							{title:'Column 2'}
						],
						rows:[
							['this is a wide value','another wide value'],
							['yet another wide value','the final wide value']
						]
					});
					.......................................................

					OUTPUT
					.................................................
					+-----------------------------------------------+
					|                   Foo Table                   |
					+-----------------------------------------------+
					|        Column 1        |       Column 2       |
					|------------------------+----------------------|
					| this is a wide value   | another wide value   |
					|------------------------+----------------------|
					| yet another wide value | the final wide value |
					+-----------------------------------------------+
					.................................................

				Column Alignment
					Alignment of values can be specified for columns using the =align= property of the `column description object`.

					Column values can be left aligned by specifying the value ='left'= or =0=, center-aligned by specifying the value ='center'= or =.5=, or right-aligned by specifying the value ='right'= or =1=.

					EXAMPLE
					.........................................................................
					Uize.Templates.Text.Table.process ({
						title:'Foo Table',
						columns:[
							{title:'Column 1',align:'left'},
							{title:'Column 2',align:'center'},
							{title:'Column 3',align:'right'}
						],
						rows:[
							['ABC','ABC','ABC'],
							['ABCDEFG','ABCDEFG','ABCDEFG'],
							['ABCDEFGHIJK','ABCDEFGHIJK','ABCDEFGHIJK'],
							['ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO'],
							['ABCDEFGHIJKLMNOPQRS','ABCDEFGHIJKLMNOPQRS','ABCDEFGHIJKLMNOPQRS']
						]
					});
					.........................................................................

					OUTPUT
					...................................................................
					+-----------------------------------------------------------------+
					|                            Foo Table                            |
					+-----------------------------------------------------------------+
					|      Column 1       |      Column 2       |      Column 3       |
					|---------------------+---------------------+---------------------|
					| ABC                 |         ABC         |                 ABC |
					|---------------------+---------------------+---------------------|
					| ABCDEFG             |       ABCDEFG       |             ABCDEFG |
					|---------------------+---------------------+---------------------|
					| ABCDEFGHIJK         |     ABCDEFGHIJK     |         ABCDEFGHIJK |
					|---------------------+---------------------+---------------------|
					| ABCDEFGHIJKLMNO     |   ABCDEFGHIJKLMNO   |     ABCDEFGHIJKLMNO |
					|---------------------+---------------------+---------------------|
					| ABCDEFGHIJKLMNOPQRS | ABCDEFGHIJKLMNOPQRS | ABCDEFGHIJKLMNOPQRS |
					+-----------------------------------------------------------------+
					...................................................................

					Left-aligned, by Default
						Column values are left-aligned, by default, if no value is specified explicitly for the =align= property of the `column description object`.

						EXAMPLE
						......................................
						Uize.Templates.Text.Table.process ({
							title:'Foo Table',
							columns:[
								{title:'Column 1'},
								{title:'Column 2',align:'right'}
							],
							rows:[
								['ABC','ABC'],
								['ABCDEFG','ABCDEFG'],
								['ABCDEFGHIJK','ABCDEFGHIJK']
							]
						});
						......................................

						In the above example, no value is specified for the =align= property in the description for the first column. As a result, the alignment for this column is defaulted to left-alignment.

						OUTPUT
						.............................
						+---------------------------+
						|         Foo Table         |
						+---------------------------+
						|  Column 1   |  Column 2   |
						|-------------+-------------|
						| ABC         |         ABC |
						|-------------+-------------|
						| ABCDEFG     |     ABCDEFG |
						|-------------+-------------|
						| ABCDEFGHIJK | ABCDEFGHIJK |
						+---------------------------+
						.............................

					Fractional Alignment
						In addition to being able to specify column alignment using the string values ='left'=, ='center'=, and ='right'=, any arbitrary fractional alignment from left to right can be specified using floating point numbers from =0= to =1=.

						EXAMPLE
						.................................................................................................
						Uize.Templates.Text.Table.process ({
							title:'Foo Table',
							columns:[
								{title:'Column 1',align:0},
								{title:'Column 2',align:.25},
								{title:'Column 3',align:.5},
								{title:'Column 4',align:.75},
								{title:'Column 5',align:1}
							],
							rows:[
								['ABC','ABC','ABC','ABC','ABC'],
								['ABCDEFG','ABCDEFG','ABCDEFG','ABCDEFG','ABCDEFG'],
								['ABCDEFGHIJK','ABCDEFGHIJK','ABCDEFGHIJK','ABCDEFGHIJK','ABCDEFGHIJK'],
								['ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO','ABCDEFGHIJKLMNO']
							]
						});
						.................................................................................................

						OUTPUT
						...........................................................................................
						+-----------------------------------------------------------------------------------------+
						|                                        Foo Table                                        |
						+-----------------------------------------------------------------------------------------+
						|    Column 1     |    Column 2     |    Column 3     |    Column 4     |    Column 5     |
						|-----------------+-----------------+-----------------+-----------------+-----------------|
						| ABC             |    ABC          |       ABC       |          ABC    |             ABC |
						|-----------------+-----------------+-----------------+-----------------+-----------------|
						| ABCDEFG         |   ABCDEFG       |     ABCDEFG     |       ABCDEFG   |         ABCDEFG |
						|-----------------+-----------------+-----------------+-----------------+-----------------|
						| ABCDEFGHIJK     |  ABCDEFGHIJK    |   ABCDEFGHIJK   |    ABCDEFGHIJK  |     ABCDEFGHIJK |
						|-----------------+-----------------+-----------------+-----------------+-----------------|
						| ABCDEFGHIJKLMNO | ABCDEFGHIJKLMNO | ABCDEFGHIJKLMNO | ABCDEFGHIJKLMNO | ABCDEFGHIJKLMNO |
						+-----------------------------------------------------------------------------------------+
						...........................................................................................

				Column Formatters
					Values for a column can optionally be formatted by specifying a formatter function or expression for the =formatter= property of the `column description object`.

					EXAMPLE
					.........................................................................................
					Uize.Templates.Text.Table.process ({
						title:'2013 Food Prices in the UK',
						columns:[
							{title:'Description'},
							{
								title:'Price',
								align:'right',
								formatter:function (value) {
									return value < 1 ? (value * 100).toFixed (0) + "p" : "£" + value.toFixed (2);
								}
							}
						],
						rows:[
							['Loaf of bread',1.30],
							['Apples, per kg',2.02],
							['Pint of milk',.46],
							['Sausages, per kg',4.84],
							['Carrots, per kg',.91],
							['Sugar, per kg',.93],
							['Dozen eggs',2.78]
						]
					});
					.........................................................................................

					In the above example, a column formatter function is being specified for the price column. The formatter function is passed a price in pounds and returns a formatted value that is expressed in pence if the value is below 1 pound, and pounds if the value is 1 pound or greater.

					OUTPUT
					..............................
					+----------------------------+
					| 2013 Food Prices in the UK |
					+----------------------------+
					|    Description    | Price  |
					|-------------------+--------|
					| Loaf of bread     |  £1.30 |
					|-------------------+--------|
					| Apples, per kg    |  £2.02 |
					|-------------------+--------|
					| Pint of milk      |    46p |
					|-------------------+--------|
					| Sausages, per kg  |  £4.84 |
					|-------------------+--------|
					| Carrots, per kg   |    91p |
					|-------------------+--------|
					| Sugar, per kg     |    93p |
					|-------------------+--------|
					| Dozen eggs        |  £2.78 |
					+----------------------------+
					..............................

					Column Formatter String Expression
						The =Uize.Templates.Text.Table= module resolves a value specified for the =formatter= option of the `column description object` to a value transformer function using the =Uize.resolveTransformer= method.

						This means that the column formatter can also be specifeid in the form of a string expression, as shown in the example below...

						EXAMPLE
						..........................................................................................
						Uize.Templates.Text.Table.process ({
							title:'2013 Food Prices in the UK',
							columns:[
								{title:'Description'},
								{
									title:'Price',
									align:'right',
									formatter:'value < 1 ? (value * 100).toFixed (0) + "p" : "£" + value.toFixed (2)'
								}
							],
							rows:[
								['Loaf of bread',1.30],
								['Apples, per kg',2.02],
								['Pint of milk',.46],
								['Sausages, per kg',4.84],
								['Carrots, per kg',.91],
								['Sugar, per kg',.93],
								['Dozen eggs',2.78]
							]
						});
						..........................................................................................

						OUTPUT
						..............................
						+----------------------------+
						| 2013 Food Prices in the UK |
						+----------------------------+
						|    Description    | Price  |
						|-------------------+--------|
						| Loaf of bread     |  £1.30 |
						|-------------------+--------|
						| Apples, per kg    |  £2.02 |
						|-------------------+--------|
						| Pint of milk      |    46p |
						|-------------------+--------|
						| Sausages, per kg  |  £4.84 |
						|-------------------+--------|
						| Carrots, per kg   |    91p |
						|-------------------+--------|
						| Sugar, per kg     |    93p |
						|-------------------+--------|
						| Dozen eggs        |  £2.78 |
						+----------------------------+
						..............................

				Column minValue and maxValue
					The =Uize.Templates.Text.Table= module will compute min and max values for each column, unless values are specified explicitly for the =minValue= and =maxValue= properties in the `column description object`.

					Specifically, if no =minValue= property is present in the `column description object` for a column, then a min value will be computed from all the values of the column, and this value will be set on the =minValue= property. Similarly, if no =maxValue= property is present in the `column description object`, then a max value will be computed from the column's values, and this value will be set on the =maxValue= property.

					Because a `column formatter` is called as an instance method on the `column description object` when formatting a value for a column, the formatter can access the values of the =minValue= and =maxValue= properties and use these values to affect the formatted value. One way that this feature can be used is to add level indicator bars in columns to indicate where the current value falls in the range of values for the column across all rows of the table.

					Consider the following example...

					EXAMPLE
					..............................................................................................
					Uize.Templates.Text.Table.process ({
						title:'2013 Food Prices in the UK',
						columns:[
							{title:'Description'},
							{
								title:'Price',
								align:'right',
								formatter:function (value) {
									return (
										(value < 1 ? (value * 100).toFixed (0) + "p" : "£" + value.toFixed (2)) + ' ' +
										Uize.Templates.Text.ProgressBar.process ({
											progress:(value - this.minValue) / (this.maxValue - this.minValue),
											trackLength:20,
											endsChar:''
										})
									);
								}
							}
						],
						rows:[
							['Loaf of bread',1.30],
							['Apples, per kg',2.02],
							['Pint of milk',.46],
							['Sausages, per kg',4.84],
							['Carrots, per kg',.91],
							['Sugar, per kg',.93],
							['Dozen eggs',2.78]
						]
					});
					..........................................................................................

					In the above example, the =Uize.Templates.Text.ProgressBar= template module is being used to add a level indicator alongside the formatted price for the values in the price column. This level indicator provides a quick visual cue as to where a price falls in the range of prices for the foods listed in the table.

					Now, the `column description object` for the price column does not specify values for the =minValue= and =maxValue= properties, so valuaes for these properties are computed from the values in the column. The formatter function for the column can then access the computed values using the =this= keyword, since the formatter is called as an instance method on the `column description object`.

					From the above example, we get the following output...

					OUTPUT
					.................................................
					+-----------------------------------------------+
					|          2013 Food Prices in the UK           |
					+-----------------------------------------------+
					|   Description    |           Price            |
					|------------------+----------------------------|
					| Loaf of bread    | £1.30 ▓▓▓▓█░░░░░░░░░░░░░░░ |
					|------------------+----------------------------|
					| Apples, per kg   | £2.02 ▓▓▓▓▓▓▓█░░░░░░░░░░░░ |
					|------------------+----------------------------|
					| Pint of milk     |   46p █░░░░░░░░░░░░░░░░░░░ |
					|------------------+----------------------------|
					| Sausages, per kg | £4.84 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█ |
					|------------------+----------------------------|
					| Carrots, per kg  |   91p ▓▓█░░░░░░░░░░░░░░░░░ |
					|------------------+----------------------------|
					| Sugar, per kg    |   93p ▓▓█░░░░░░░░░░░░░░░░░ |
					|------------------+----------------------------|
					| Dozen eggs       | £2.78 ▓▓▓▓▓▓▓▓▓▓█░░░░░░░░░ |
					+-----------------------------------------------+
					.................................................

			Column Width
				Column width for a column is calculated as the maximum of the column title width and the width of all the column values.

				EXAMPLE
				............................................
				Uize.Templates.Text.Table.process ({
					title:'Foo Table',
					columns:[
						{title:'Column 1'},
						{title:'Column 2 (Wide Column Title)'}
					],
					rows:[
						['column value','foo'],
						['wide column value','bar'],
						['even wider column value','baz']
					]
				});
				............................................

				In the above example, the widest value in the first column is wider than the column's title, so the width of the widest value is used as the column width. In the second column, the column title is wider than the widest column value, so the column title width is used as the column width.

				OUTPUT
				..........................................................
				+--------------------------------------------------------+
				|                       Foo Table                        |
				+--------------------------------------------------------+
				|        Column 1         | Column 2 (Wide Column Title) |
				|-------------------------+------------------------------|
				| column value            | foo                          |
				|-------------------------+------------------------------|
				| wide column value       | bar                          |
				|-------------------------+------------------------------|
				| even wider column value | baz                          |
				+--------------------------------------------------------+
				..........................................................

				Table Title Can Expand Column Widths
					If the table title is wider than the sum of all the calculated column widths and column separators, then the difference will be distributed as padding evenly across the columns.

					EXAMPLE
					..........................................................
					Uize.Templates.Text.Table.process ({
						title:'This is an extremely long title for this table',
						columns:[
							{title:'Col 1'},
							{title:'Col 2'},
							{title:'Col 3'}
						],
						rows:[
							['Foo 1','Foo 2','Foo 3'],
							['Bar 1','Bar 2','Bar 3'],
							['Baz 1','Baz 2','Baz 3'],
							['Qux 1','Qux 2','Qux 3']
						]
					});
					..........................................................

					In the above example, the table's title is wider than the sum of the column widths (as calculated from the column values and column titles) and column separators. The number of characters by which the title is wider is distributed as padding spaces evenly across the three columns.

					OUTPUT
					..................................................
					+------------------------------------------------+
					| This is an extremely long title for this table |
					+------------------------------------------------+
					|     Col 1     |     Col 2      |     Col 3     |
					|---------------+----------------+---------------|
					| Foo 1         | Foo 2          | Foo 3         |
					|---------------+----------------+---------------|
					| Bar 1         | Bar 2          | Bar 3         |
					|---------------+----------------+---------------|
					| Baz 1         | Baz 2          | Baz 3         |
					|---------------+----------------+---------------|
					| Qux 1         | Qux 2          | Qux 3         |
					+------------------------------------------------+
					..................................................
*/

Uize.module ({
	name:'Uize.Templates.Text.Table',
	required:[
		'Uize.Data.Util',
		'Uize.Array.Util',
		'Uize.Str.Limit'
	],
	builder:function () {
		'use strict';

		var
			/*** Variables for Performance Optimization ***/
				_pad = Uize.Str.Limit.lengthize
		;

		return Uize.package ({
			process:function (_input) {
				var
					_title = _input.title,
					_columns = _input.columns,
					_rows = _input.rows
				;

				/*** resolve column information ***/
					Uize.forEach (
						_columns,
						function (_column,_columnNo) {
							var _columnValues = Uize.Data.Util.getColumn (_rows,_columnNo);
							if (!('minValue' in _column)) _column.minValue = Uize.min (_columnValues);
							if (!('maxValue' in _column)) _column.maxValue = Uize.max (_columnValues);
							_column.formatter = Uize.resolveTransformer (_column.formatter);
						}
					);

				/*** format column data and get max width for each column ***/
					var
						_columnMaxWidths = Uize.map (_columns,'value.title.length'),
						_formattedRows = Uize.map (
							_rows,
							function (_row) {
								return Uize.map (
									_columns,
									function (_column,_columnNo) {
										var _formattedValue = _column.formatter (_row [_columnNo]) + '';
										_columnMaxWidths [_columnNo] = Math.max (
											_columnMaxWidths [_columnNo],
											_formattedValue.length
										);
										return _formattedValue;
									}
								);
							}
						)
					;

					/*** distribute extra padding to columns, if title width expands table width ***/
						var
							_columnsLength = _columns.length,
							_tableWidthPerTitle = _title ? 4 + _title.length : 0,
							_tableWidthPerColumns = 4 + Uize.Array.Util.sum (_columnMaxWidths) + (_columnsLength - 1) * 3,
							_paddingToDistribute = _tableWidthPerTitle - _tableWidthPerColumns,
							_paddingDistributed = 0
						;
						if (_paddingToDistribute > 0)
							Uize.forEach (
								_columnMaxWidths,
								function (_maxWidth,_columnNo) {
									var _newPaddingDistributed = Math.round (
										_paddingToDistribute * (_columnNo + 1) / _columnsLength
									);
									_columnMaxWidths [_columnNo] = _maxWidth + _newPaddingDistributed - _paddingDistributed;
									_paddingDistributed = _newPaddingDistributed;
								}
							)
						;

				/*** produce row dividers ***/
					var
						_columnLines = Uize.map (
							_columnMaxWidths,
							function (_columnMaxWidth) {return Uize.Str.Repeat.repeat ('-',_columnMaxWidth)}
						),
						_rowSeparatorLine = '|-' + _columnLines.join ('-+-') + '-|',
						_topAndBottomLine = '+-' + _columnLines.join ('---') + '-+'
					;

				return (
					(
						_title
							? (_topAndBottomLine + '\n| ' + _pad (_title,_topAndBottomLine.length - 4,'center') + ' |\n')
							: ''
					) +
					_topAndBottomLine + '\n' +
					(
						'| ' +
						Uize.map (
							_columns,
							function (_column,_columnNo) {return _pad (_column.title,_columnMaxWidths [_columnNo],'center')}
						).join (' | ') + ' |'
					) + '\n' +
					_rowSeparatorLine + '\n' +
					Uize.map (
						_formattedRows,
						function (_row) {
							return (
								'| ' +
								Uize.map (
									_row,
									function (_column,_columnNo) {
										return _pad (_column,_columnMaxWidths [_columnNo],_columns [_columnNo].align);
									}
								).join (' | ') +
								' |\n'
							);
						}
					).join (_rowSeparatorLine + '\n') +
					_topAndBottomLine + '\n'
				);
			}
		});
	}
});

