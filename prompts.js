const prompts = [
  {
    type: 'text',
    name: 'token',
    message: 'Figma token:',
    validate: value => value === '' ? 'Generate a personal token for figma, read here: https://www.figma.com/developers/docs#authentication' : true
  },
  {
    type: 'text',
    name: 'id',
    message: 'Figma file id:',
    validate: value => value === '' ? 'Visit figma project in the browser and copy the id: https://www.figma.com/file/FILE-ID/project-name' : true
  },
  {
    type: 'text',
    name: 'page',
    message: 'Name of the page with icons:',
    initial: 'Tokens'
  },
  {
    type: 'text',
    name: 'frame',
    message: 'Name of the frame with icons:',
    initial: 'Icons'
  },
  {
    type: 'text',
    name: 'file',
    message: 'Sprite name:',
    initial: 'sprite.svg'
  },
  {
    type: 'confirm',
    name: 'keepIcons',
    message: 'Keep svg icons:',
    initial: false
  }
]

module.exports = prompts
