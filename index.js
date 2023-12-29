/** @format */

const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "uber",
  brokers: ["192.168.1.6:9092"],
});
