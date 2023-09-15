FROM eclipse-mosquitto

COPY publish.sh /publish.sh
RUN chmod +x /publish.sh

ENTRYPOINT [ "sh", "publish.sh" ]
