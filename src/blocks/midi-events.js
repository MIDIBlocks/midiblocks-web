import * as Blockly from 'blockly/core'

/**
 * When MIDI {Event}
 */
Blockly.JavaScript['when_midi_event'] = function(block) {
  const dropdown_event = block.getFieldValue('event')
  const statements_statements = Blockly.JavaScript.statementToCode(block, 'statements')

let code = `addEventListener('${dropdown_event}', function (event) {
  ${statements_statements}
});\n`

  return code
}

/**
 * 👇👇👇 DO NOT EDIT BLOCK DEFINITIONS BELOW MANUALLY 👇👇👇
 * - To make changes, import ./backups/midi-events.js into: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
 * - Make edits there, then click Block Exporter
 * - Select ONLY "Block Definitions" in JavaScript format
 * - Copy paste code below
 */
Blockly.Blocks['when_midi_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When 🎹");
    this.appendStatementInput("statements")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["Note On","noteon"], ["Note Off","noteoff"], ["Control Change","controlchange"]]), "event");
    this.setInputsInline(false);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
