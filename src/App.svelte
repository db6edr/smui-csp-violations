<script lang="ts">
    import FormField from '@smui/form-field';
    import Select, { Option } from '@smui/select';
    import Slider from '@smui/slider';
    import Textfield from '@smui/textfield';
    import CharacterCounter from '@smui/textfield/character-counter';

    let options = ['one', 'two', 'three'];
    let selectedSelect = options[0];
    let slider = 50;

    let value = '';
    let valueA = '';
</script>

<div class="root">
    <div class="item">
        <div>
            <Select bind:value={selectedSelect} label="Selection" variant="outlined">
                {#each options as option}
                    <Option value={option}>{option}</Option>
                {/each}
            </Select>
        </div>

        <div>
            <Textfield label="Outlined" variant="outlined" bind:value>
            </Textfield>
        </div>

        <div>
            <Textfield textarea bind:value={valueA} label="Textarea">
            </Textfield>
        </div>
    </div>

    <div class="item">
        <div class="set-width">
            <FormField style="flex-grow: 1; display: flex" >
                <span slot="label" style="padding-right: 12px; width: max-content; display: block;" >Slider</span>
                <Slider style="flex-grow: 1;" bind:value={slider} />
            </FormField>
        </div>
        <div>
            Value: {slider}
        </div>
    </div>
</div>

<style lang="scss">
    div.root {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1em;
        row-gap: 2em;

        div.item {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            column-gap: 1em;

            div.set-width {
                width: 30%;
            }
        }
    }
</style>
