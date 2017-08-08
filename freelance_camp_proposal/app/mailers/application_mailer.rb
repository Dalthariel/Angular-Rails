class ApplicationMailer < ActionMailer::Base
  default from: 'mailerbot@davidhamaker.com'
  layout 'mailer'
end
