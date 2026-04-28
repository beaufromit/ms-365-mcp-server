import { describe, expect, it } from 'vitest';
import { getCombinedPresetPattern } from '../src/tool-categories.js';

describe('tool category presets', () => {
  it('includes meeting transcript tools in the work preset', () => {
    const workPreset = new RegExp(getCombinedPresetPattern(['work']), 'i');

    expect(workPreset.test('list-online-meetings')).toBe(true);
    expect(workPreset.test('list-meeting-transcripts')).toBe(true);
    expect(workPreset.test('get-meeting-transcript')).toBe(true);
    expect(workPreset.test('get-meeting-transcript-content')).toBe(true);
    expect(workPreset.test('list-meeting-recordings')).toBe(true);
    expect(workPreset.test('get-presence')).toBe(true);
  });
});
